import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CarouselModule, CarouselPageEvent } from 'primeng/carousel';
import { LanguageService } from '../../../../core/services/language.service';

interface HeroSlide {
  title: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule, CarouselModule, ButtonModule, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  activeIndex = 0;
  progress = 0;
  interval: any;
  autoplayInterval = 5000;

  get gradientClass(): string {
    return this.languageService.currentLang === 'ar'
      ? 'bg-gradient-to-l from-primary-dark/90 via-primary-dark/70 via-primary-dark/60 to-primary-dark/10'
      : 'bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 via-primary-dark/60 to-primary-dark/10';
  }

  slides: HeroSlide[] = [
    {
      title: 'features.home.hero.slides.vision.title',
      description: 'features.home.hero.slides.vision.description',
      image: 'images/oil-eng.jpg',
    },
    {
      title: 'features.home.hero.slides.mission.title',
      description: 'features.home.hero.slides.mission.description',
      image: 'images/oil-refinery.jpg',
    },
    {
      title: 'features.home.hero.slides.projects.title',
      description: 'features.home.hero.slides.projects.description',
      image: 'images/oil-pipelines.jpg',
    },
    {
      title: 'features.home.hero.slides.contact.title',
      description: 'features.home.hero.slides.contact.description',
      image: 'images/oil-2.jpg',
    }
  ];

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.startProgress();
  }

  onSlideChange(event: CarouselPageEvent) {
    this.activeIndex = event.page ?? 0;
    this.resetProgress();
  }

  setSlide(index: number) {
    this.activeIndex = index;
    this.resetProgress();
  }

  resetProgress() {
    clearInterval(this.interval);
    this.progress = 0;
    this.startProgress();
  }

  startProgress() {
    const step = 1000 / (this.autoplayInterval / 1000); 
    this.interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += step;
      } else {
        this.progress = 100;
        clearInterval(this.interval);
      }
    }, 100);
  }
}
