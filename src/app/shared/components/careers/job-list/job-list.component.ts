import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { LanguageService } from '../../../../core/services/language.service';
import { LocalizedPipe } from '../../../pipes/localized.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, CheckboxModule,LocalizedPipe,TranslateModule],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent {
  constructor(public languageService: LanguageService,private router: Router) {
  }

  sortOption: string = 'newest';
  sortOptions = [
    { label: 'Newest First', value: 'newest', icon: 'pi pi-calendar-plus' },
    { label: 'Oldest First', value: 'oldest', icon: 'pi pi-calendar-minus' },
    { label: 'Company (A-Z)', value: 'company-asc', icon: 'pi pi-sort-alpha-down' },
    { label: 'Company (Z-A)', value: 'company-desc', icon: 'pi pi-sort-alpha-up-alt' },
  ];

 jobs = [
  {
    id: 1,
    code: 'JOB-101',
    title: { en: 'Petroleum Engineer', ar: 'مهندس بترول' },
    company: { en: 'Syrian Petroleum Company', ar: 'الشركة السورية للنفط' },
    location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
    logo: 'http://www.sgc.gov.sy/fello/logo2.jpg',
    category: { en: 'Engineering', ar: 'الهندسة' },
    type: { en: 'Full Time', ar: 'دوام كامل' },
    role: { en: 'Field Operations', ar: 'عمليات ميدانية' },
    postedDate: '2025-08-05',
    featured: true,
  },
  {
    id: 2,
    code: 'JOB-102',
    title: { en: 'Geologist', ar: 'جيولوجي' },
    company: { en: 'Syrian Petroleum Company', ar: 'الشركة السورية للنفط' },
    location: { en: 'Homs, Syria', ar: 'حمص، سوريا' },
    logo: 'http://www.sgc.gov.sy/fello/logo2.jpg',
    category: { en: 'Geology', ar: 'الجيولوجيا' },
    type: { en: 'Full Time', ar: 'دوام كامل' },
    role: { en: 'Exploration', ar: 'استكشاف' },
    postedDate: '2025-08-08',
    featured: true,
  },
  {
    id: 3,
    code: 'JOB-103',
    title: { en: 'Pipeline Operator', ar: 'مشغل خطوط أنابيب' },
    company: { en: 'Syrian Gas Company', ar: 'الشركة السورية للغاز' },
    location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Syrian_Gas_Logo.png',
    category: { en: 'Operations', ar: 'العمليات' },
    type: { en: 'Full Time', ar: 'دوام كامل' },
    role: { en: 'Pipeline Operations', ar: 'تشغيل خطوط الأنابيب' },
    postedDate: '2025-08-10',
    featured: false,
  },
  {
    id: 4,
    code: 'JOB-104',
    title: { en: 'Refinery Engineer', ar: 'مهندس مصفاة' },
    company: { en: 'Homs Refinery', ar: 'الشركة العامة لمصفاة حمص' },
    location: { en: 'Homs, Syria', ar: 'حمص، سوريا' },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Homs_Refinery.png',
    category: { en: 'Chemical', ar: 'الهندسة الكيميائية' },
    type: { en: 'Full Time', ar: 'دوام كامل' },
    role: { en: 'Refinery Operations', ar: 'عمليات التكرير' },
    postedDate: '2025-08-12',
    featured: true,
  },
  {
    id: 5,
    code: 'JOB-105',
    title: { en: 'Process Engineer', ar: 'مهندس عمليات' },
    company: { en: 'Banias Refinery', ar: 'شركة مصفاة بانياس' },
    location: { en: 'Banias, Syria', ar: 'بانياس، سوريا' },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Banias_Refinery.jpg',
    category: { en: 'Process Engineering', ar: 'هندسة العمليات' },
    type: { en: 'Full Time', ar: 'دوام كامل' },
    role: { en: 'Refinery Operations', ar: 'عمليات التكرير' },
    postedDate: '2025-08-15',
    featured: false,
  },
  {
    id: 6,
    code: 'JOB-106',
    title: { en: 'Fuel Distribution Manager', ar: 'مدير توزيع المحروقات' },
    company: { en: 'Fuel Company', ar: 'شركة محروقات' },
    location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Fuel_Company.png',
    category: { en: 'Management', ar: 'إدارة' },
    type: { en: 'Full Time', ar: 'دوام كامل' },
    role: { en: 'Distribution', ar: 'التوزيع' },
    postedDate: '2025-08-18',
    featured: true,
  },
];

  isSortOpen: boolean = false;
  filters = {
    categories: [] as string[],
    types: [] as string[],
    companies: [] as string[],
  };

get filteredJobs() {
  let jobs = this.jobs.filter((job) => {
    const category = job.category[this.languageService.currentLang as keyof typeof job.category];
    const type = job.type[this.languageService.currentLang as keyof typeof job.type];
    const company = job.company[this.languageService.currentLang as keyof typeof job.company];

    const categoryMatch =
      this.filters.categories.length > 0
        ? this.filters.categories.includes(category)
        : true;

    const typeMatch =
      this.filters.types.length > 0
        ? this.filters.types.includes(type)
        : true;

    const companyMatch =
      this.filters.companies.length > 0
        ? this.filters.companies.includes(company)
        : true;

    return categoryMatch && typeMatch && companyMatch;
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

  clearFilter(key: 'categories' | 'types' | 'companies') {
    this.filters[key] = [];
  }

  clearAll() {
    this.filters = {
      categories: [],
      types: [],
      companies: [],
    };
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
