import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/services/language.service';

interface HeroSlide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  progress = 0;
  timeoutId: any;
  progressId: any;
  autoplayInterval = 5000;

  slides: HeroSlide[] = [
    {
      title: 'features.home.hero.slides.vision.title',
      description: 'features.home.hero.slides.vision.description',
      image: 'images/oil-eng.webp',
    },
    {
      title: 'features.home.hero.slides.mission.title',
      description: 'features.home.hero.slides.mission.description',
      image: 'images/oil-refinery.webp',
    },
    {
      title: 'features.home.hero.slides.projects.title',
      description: 'features.home.hero.slides.projects.description',
      image: 'images/oil-pipelines.webp',
    },
    {
      title: 'features.home.hero.slides.contact.title',
      description: 'features.home.hero.slides.contact.description',
      image: 'images/oil-2.webp',
    }
  ];

  constructor(public languageService: LanguageService) {}

  get gradientClass(): string {
    return this.languageService.currentLang === 'ar'
      ? 'bg-gradient-to-l from-primary-dark/90 via-primary-dark/70 via-primary-dark/60 to-primary-dark/10'
      : 'bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 via-primary-dark/60 to-primary-dark/10';
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.clearTimers();
  }

  setSlide(index: number): void {
    this.activeIndex = index;
    this.restartAutoplay();
  }

  private startAutoplay(): void {
    this.startProgress();
    this.timeoutId = setTimeout(() => {
      this.nextSlide();
    }, this.autoplayInterval);
  }

  private restartAutoplay(): void {
    this.clearTimers();
    this.progress = 0;
    this.startAutoplay();
  }

  private nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    this.progress = 0;
    this.startAutoplay();
  }

  private startProgress(): void {
    const stepTime = 100; 
    const step = 100 / (this.autoplayInterval / stepTime);
    this.progressId = setInterval(() => {
      this.progress = Math.min(this.progress + step, 100);
    }, stepTime);
  }

  private clearTimers(): void {
    clearTimeout(this.timeoutId);
    clearInterval(this.progressId);
  }
}
