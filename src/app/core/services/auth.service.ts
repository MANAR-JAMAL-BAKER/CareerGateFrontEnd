import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthStateService } from './auth-state.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private state: AuthStateService
  ) {}

  login(credentials: { userId: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/Users/login`, credentials).pipe(
      tap((data) => {
        this.state.loginWithToken(data.result.token, data.result);
      })
    );
  }

  logout() {
    this.state.logout();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.state.isAuthenticated$.value;
  }

  getUser() {
    return this.state.user;
  }
}
