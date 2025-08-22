import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-careers',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,TranslatePipe],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      location: 'Istanbul, Turkey',
      category: 'Engineering',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'SoftHouse',
      location: 'Amman, Jordan',
      category: 'Engineering',
      type: 'Remote'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      location: 'Dubai, UAE',
      category: 'Design',
      type: 'Part-time'
    }
  ];

  filters = {
    keyword: '',
    company: '',
    category: '',
    location: ''
  };

  get filteredJobs() {
    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(this.filters.keyword.toLowerCase()) &&
      (this.filters.company ? job.company === this.filters.company : true) &&
      (this.filters.category ? job.category === this.filters.category : true) &&
      (this.filters.location ? job.location === this.filters.location : true)
    );
  }

  get companies() {
    return [...new Set(this.jobs.map(j => j.company))];
  }

  get categories() {
    return [...new Set(this.jobs.map(j => j.category))];
  }

  get locations() {
    return [...new Set(this.jobs.map(j => j.location))];
  }
}
