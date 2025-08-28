import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { LanguageService } from '../../../../core/services/language.service';
import { LocalizedPipe } from '../../../pipes/localized.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { CareersFilterComponent } from "../careers-filter/careers-filter.component";
import { CareersService } from '../../../../core/services/careers.service';
@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, AccordionModule, DialogModule, FormsModule, SelectModule, CheckboxModule, LocalizedPipe, TranslateModule, CareersFilterComponent],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent {
  constructor(public languageService: LanguageService,private router: Router, private careersService: CareersService) {
  }

  sortOption: string = 'newest';
sortOptions = [
  { 
    label: { en: 'Newest First', ar: 'الأحدث أولاً' }, 
    value: 'newest', 
    icon: 'pi pi-calendar-plus' 
  },
  { 
    label: { en: 'Oldest First', ar: 'الأقدم أولاً' }, 
    value: 'oldest', 
    icon: 'pi pi-calendar-minus' 
  },
  { 
    label: { en: 'Company (A-Z)', ar: 'الشركة (أ-ي)' }, 
    value: 'company-asc', 
    icon: 'pi pi-sort-alpha-down' 
  },
  { 
    label: { en: 'Company (Z-A)', ar: 'الشركة (ي-أ)' }, 
    value: 'company-desc', 
    icon: 'pi pi-sort-alpha-up-alt' 
  }
];
  jobs: any[] = [];

 showFilter = false;
 
  isSortOpen: boolean = false;
  filters = {
    categories: [] as string[],
    types: [] as string[],
    companies: [] as string[],
      locations: [] as string[], 
  };
  ngOnInit(): void {
    this.careersService.getAllJobs().subscribe((data) => {
      this.jobs = data;
    });
  }
get filteredJobs() {
  let jobs = this.jobs.filter((job) => {
    const category = job.category[this.languageService.currentLang as keyof typeof job.category];
    const type = job.type[this.languageService.currentLang as keyof typeof job.type];
    const company = job.company[this.languageService.currentLang as keyof typeof job.company];
    const location = job.location[this.languageService.currentLang as keyof typeof job.location];

    const categoryMatch = this.filters.categories.length > 0
      ? this.filters.categories.includes(category)
      : true;

    const typeMatch = this.filters.types.length > 0
      ? this.filters.types.includes(type)
      : true;

    const companyMatch = this.filters.companies.length > 0
      ? this.filters.companies.includes(company)
      : true;

    const locationMatch = this.filters.locations.length > 0
      ? this.filters.locations.includes(location)
      : true;

    return categoryMatch && typeMatch && companyMatch && locationMatch;
  });

  // Sorting logic
  switch (this.sortOption) {
    case 'newest':
      jobs = jobs.sort(
        (a, b) =>
          new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
      );
      break;

    case 'oldest':
      jobs = jobs.sort(
        (a, b) =>
          new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()
      );
      break;

    case 'company-asc':
      jobs = jobs.sort((a, b) =>
        (a.company[this.languageService.currentLang as keyof typeof a.company]).localeCompare(
          b.company[this.languageService.currentLang as keyof typeof b.company]
        )
      );
      break;

    case 'company-desc':
      jobs = jobs.sort((a, b) =>
        (b.company[this.languageService.currentLang as keyof typeof b.company]).localeCompare(
          a.company[this.languageService.currentLang as keyof typeof a.company]
        )
      );
      break;
  }

  return jobs;
}

  toggleFilter(list: string[], value: string) {
    const index = list.indexOf(value);
    if (index === -1) {
      list.push(value);
    } else {
      list.splice(index, 1);
    }
  }

  clearFilter(key: 'categories' | 'types' | 'companies'|'locations') {
    this.filters[key] = [];
  }

  clearAll() {
    this.filters = {
      categories: [],
      types: [],
      companies: [],
      locations: [],
    };
  }
get locations() {
  return this.countBy(
    this.jobs.map(j => j.location[this.languageService.currentLang as keyof typeof j.location])
  );
}
get categories() {
  return this.countBy(
    this.jobs.map((j) => j.category[this.languageService.currentLang as keyof typeof j.category])
  );
}

get jobTypes() {
  return this.countBy(
    this.jobs.map((j) => j.type[this.languageService.currentLang as keyof typeof j.type])
  );
}

get companies() {
  return this.countBy(
    this.jobs.map((j) => j.company[this.languageService.currentLang as keyof typeof j.company])
  );
}


  private countBy(list: string[]) {
    const counts: { [key: string]: number } = {};
    list.forEach((item) => {
      counts[item] = (counts[item] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({
      name,
      count,
    }));
  }
goToJobDetails(jobId: number) {
  this.router.navigate(['/careers', jobId]);
}
  onLogoError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.style.display = 'none';
  }
}
