import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  selector: 'app-footer-website',
  imports: [TranslateModule],
  templateUrl: './footer-website.component.html',
  styleUrl: './footer-website.component.scss'
})
export class FooterWebsiteComponent {
  currentYear = new Date().getFullYear();
  constructor(public languageService: LanguageService) {}

}
