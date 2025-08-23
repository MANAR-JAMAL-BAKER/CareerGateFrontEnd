import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NavWebsiteComponent } from "../../shared/components/layouts/nav-website/nav-website.component";
import { FooterWebsiteComponent } from "../../shared/components/layouts/footer-website/footer-website.component";

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule, TranslateModule, NavWebsiteComponent, FooterWebsiteComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

    constructor(public languageService: LanguageService) {}
 
}
