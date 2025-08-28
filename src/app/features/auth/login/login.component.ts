import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  currentYear = new Date().getFullYear();

 private fb = inject(FormBuilder);
  private router = inject(Router);
 showPassword = false;
  loading = signal(false);

  form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  constructor(public languageService: LanguageService) {}




  async onSubmit() {
    if (this.form.invalid) return;
    this.loading.set(true);
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
      this.loading.set(false);
    }, 1000);
  }
}
