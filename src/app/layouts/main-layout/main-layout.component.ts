import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NavWebsiteComponent } from "../../shared/components/layouts/nav-website/nav-website.component";

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule, TranslateModule, NavWebsiteComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  currentYear = new Date().getFullYear();
    constructor(public languageService: LanguageService) {}
 
}
