import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface DecodedToken {
  exp?: number;
  [claim: string]: any;
}

function b64urlDecode(str: string): string {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  const pad = str.length % 4;
  if (pad) str += '='.repeat(4 - pad);
  return decodeURIComponent(
    Array.prototype.map
      .call(
        atob(str),
        (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      )
      .join('')
  );
}

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private tokenKey = 'access_token';
  private userKey = 'user';
  private _token: string | null = null;
  private _permissions = new Set<string>();
  private _roles = new Set<string>();
  private _user: any = null;

  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.restore();
  }

  get token(): string | null {
    return this._token;
  }

  get user(): any {
    return this._user;
  }

  loginWithToken(jwt: string, userData?: any) {
    this._token = jwt;
    localStorage.setItem(this.tokenKey, jwt);

    if (userData) {
      this._user = userData;
      localStorage.setItem(this.userKey, JSON.stringify(userData));
    }

    this.readToken(jwt);
    this.isAuthenticated$.next(true);
  }

  logout() {
    this._token = null;
    this._user = null;
    this._permissions.clear();
    this._roles.clear();
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.isAuthenticated$.next(false);
  }

  restore() {
    const jwt = localStorage.getItem(this.tokenKey);
    const savedUser = localStorage.getItem(this.userKey);

    if (savedUser) this._user = JSON.parse(savedUser);

    if (!jwt) {
      this.logout();
      return;
    }

    const payload = this.safeDecode(jwt);
    if (!payload || this.isExpired(payload)) {
      this.logout();
      return;
    }

    this._token = jwt;
    this.readToken(jwt, payload);
    this.isAuthenticated$.next(true);
  }

  hasPermission(key: string): boolean {

    return this._permissions.has(key);
  }

  hasAny(keys: string[]): boolean {
    return keys.some((k) => this._permissions.has(k));
  }

  hasAll(keys: string[]): boolean {
    return keys.every((k) => this._permissions.has(k));
  }

  hasRole(role: string): boolean {
    return this._roles.has(role);
  }

  private readToken(jwt: string, payload?: DecodedToken) {
    const body = payload ?? this.safeDecode(jwt) ?? {};

    for (const k of this.extractAsArray(body, 'permission'))
      this._permissions.add(k);
    for (const k of this.extractAsArray(body, 'permissions'))
      this._permissions.add(k);

    const roleKeys = [
      'role',
      'roles',
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    ];
    const roles = roleKeys.flatMap((k) => this.extractAsArray(body, k));
    this._roles = new Set(roles);
  }

  private safeDecode(jwt: string): DecodedToken | null {
    try {
      const payload = jwt.split('.')[1];
      if (!payload) return null;
      return JSON.parse(b64urlDecode(payload));
    } catch {
      return null;
    }
  }

  private isExpired(payload: DecodedToken): boolean {
    if (!payload.exp) return false;
    return payload.exp <= Math.floor(Date.now() / 1000);
  }

  private extractAsArray(obj: any, key: string): string[] {
    const v = obj?.[key];
    if (v == null) return [];
    return Array.isArray(v) ? (v as string[]) : [String(v)];
  }
}
