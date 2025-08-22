import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
// import { PrimeNG } from 'primeng/config';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private rtlSubject = new BehaviorSubject<boolean>(false);
  rtl$ = this.rtlSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(
    private translate: TranslateService,
    // private config: PrimeNG,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.initLanguage();
  }

  initLanguage() {
    const lang = localStorage.getItem('lang') || 'ar';
    this.setLanguage(lang);
  }

  setLanguage(lang: string): Promise<void> {
    return new Promise((resolve) => {
      this.translate.use(lang).subscribe(() => {
        const html = this.document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        const body = this.document.body;
        body.classList.remove('rtl', 'ltr');
        body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');

        this.translate.get('primeng').subscribe((res) => {
          // this.config.setTranslation(res);
          this.rtlSubject.next(lang === 'ar');
          localStorage.setItem('lang', lang);
          resolve();
        });
      });
    });
  }

  toggleLang(): Promise<void> {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    document.body.classList.add('lang-switching');
    this.loadingSubject.next(true);

    return this.setLanguage(newLang).then(() => {
      setTimeout(() => {
        document.body.classList.remove('lang-switching');
        this.loadingSubject.next(false);
      }, 400);
    });
  }

  get currentLang(): string {
    return this.translate.currentLang || 'ar';
  }


}
