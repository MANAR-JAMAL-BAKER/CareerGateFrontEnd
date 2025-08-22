import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-website',
  imports: [CommonModule,TranslateModule, RouterModule],
  templateUrl: './nav-website.component.html',
  styleUrl: './nav-website.component.scss',
})
export class NavWebsiteComponent {
  mobileMenuOpen = false;
  constructor(public languageService: LanguageService) {}

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
