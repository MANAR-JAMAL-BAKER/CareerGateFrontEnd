import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../../core/services/language.service';
import { LazyImgDirective } from '../../../../shared/directives/lazy-img.directive';

interface HeroSlide {
  title: string;
  description: string;
  image: string;
  placeholder: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslateModule, LazyImgDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  progress = 0;
  intervalId: any;
  autoplayInterval = 5000;
  step = 100 / (5000 / 100);

  slides: HeroSlide[] = [
    {
      title: 'features.home.hero.slides.vision.title',
      description: 'features.home.hero.slides.vision.description',
      image: 'images/oil-eng.webp',
      placeholder: 'images/oil-eng-blur.webp',
    },
    {
      title: 'features.home.hero.slides.mission.title',
      description: 'features.home.hero.slides.mission.description',
      image: 'images/oil-refinery.webp',
      placeholder: 'images/oil-refinery-blur.webp',
    },
    {
      title: 'features.home.hero.slides.projects.title',
      description: 'features.home.hero.slides.projects.description',
      image: 'images/oil-pipelines.webp',
      placeholder: 'images/oil-pipelines-blur.webp',
    },
    {
      title: 'features.home.hero.slides.contact.title',
      description: 'features.home.hero.slides.contact.description',
      image: 'images/oil-2.webp',
      placeholder: 'images/oil-2-blur.webp',
    }
  ];

  constructor(public languageService: LanguageService) {}

  get gradientClass(): string {
    return this.languageService.currentLang === 'ar'
      ? 'bg-gradient-to-l from-primary-dark/90 via-primary-dark/70 via-primary-dark/60 to-primary-dark/10'
      : 'bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 via-primary-dark/60 to-primary-dark/10';
  }

  ngOnInit(): void {
    this.slides.slice(1).forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  setSlide(index: number): void {
    this.activeIndex = index;
    this.resetAutoplay();
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      if (this.progress < 100) {
        this.progress += this.step;
      } else {
        this.nextSlide();
      }
    }, 100);
  }

  private resetAutoplay(): void {
    clearInterval(this.intervalId);
    this.progress = 0;
    this.startAutoplay();
  }

  private nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    this.progress = 0;
  }
}
