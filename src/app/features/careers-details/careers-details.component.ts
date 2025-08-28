import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { CommonModule } from '@angular/common';
import { CareersService } from '../../core/services/careers.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-careers-details',
  imports: [TranslateModule, LocalizedPipe, CommonModule, RouterModule],
  templateUrl: './careers-details.component.html',
  styleUrls: ['./careers-details.component.scss'],
})
export class CareersDetailsComponent implements OnInit {
  jobId!: number;
  job: any;
  otherJobs: any;
  currentUrl: string = window.location.href;
    copied: boolean = false; 
  disabled: boolean = false; 
  constructor(
    public languageService: LanguageService,
    public careersService: CareersService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
     this.currentUrl = window.location.href;
    this.route.params.subscribe((params) => {
      this.jobId = +params['id'];
      this.careersService
        .getJobDetails()
        .subscribe((data) => (this.job = data));
      this.careersService
        .getOtherJobs(this.jobId)
        .subscribe((data:any) => (this.otherJobs = data));
      if (!this.job) {
        this.router.navigate(['/careers']);
      }
    });
  }

  copyLink() {
    if (this.disabled) return;

    navigator.clipboard.writeText(this.currentUrl).then(() => {
      this.copied = true;
      this.disabled = true;

      setTimeout(() => {
        this.copied = false;
        this.disabled = false;
      }, 2000);
    });
  }

  getWhatsappLink(jobTitle: string): string {
    return `https://wa.me/?text=${encodeURIComponent(jobTitle)} - ${this.currentUrl}`;
  }

  getFacebookLink(): string {
    return `https://www.facebook.com/sharer/sharer.php?u=${this.currentUrl}`;
  }

  getLinkedinLink(): string {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${this.currentUrl}`;
  }

  getInstagramLink(username: string): string {
    return `https://instagram.com/${username}`;
  }
}
