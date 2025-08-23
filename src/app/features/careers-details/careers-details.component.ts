import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { LocalizedPipe } from '../../shared/pipes/localized.pipe';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-careers-details',
  imports: [TranslateModule, LocalizedPipe, CommonModule,RouterModule],
  templateUrl: './careers-details.component.html',
  styleUrls: ['./careers-details.component.scss'],
})
export class CareersDetailsComponent implements OnInit {
  jobId!: number;
  job: any;
  jobs = [
  {
    "id": 1,
    "code": "JOB-101",
    "title": {
      "en": "Petroleum Engineer",
      "ar": "مهندس بترول"
    },
    "company": {
      "en": "Syrian Petroleum Company",
      "ar": "الشركة السورية للنفط"
    },
    "location": {
      "en": "Damascus, Syria",
      "ar": "دمشق، سوريا"
    },
    "logo":'http://www.sgc.gov.sy/fello/logo2.jpg',
    "type": {
      "en": "Full Time",
      "ar": "دوام كامل"
    },
    "responsibilities": [
      {
        "en": "Manage oil extraction processes.",
        "ar": "إدارة عمليات استخراج النفط."
      },
      {
        "en": "Coordinate with drilling teams.",
        "ar": "التنسيق مع فرق الحفر."
      },
      {
        "en": "Ensure safety compliance.",
        "ar": "ضمان الامتثال لمعايير السلامة."
      }
    ],
    "qualifications": [
      {
        "en": "BSc in Petroleum Engineering",
        "ar": "درجة البكالوريوس في هندسة البترول"
      },
      {
        "en": "3+ years experience",
        "ar": "خبرة أكثر من 3 سنوات"
      },
      {
        "en": "Analytical skills",
        "ar": "مهارات تحليلية"
      }
    ],
    "skills": [
      {
        "en": "Problem-solving",
        "ar": "حل المشكلات"
      },
      {
        "en": "Teamwork",
        "ar": "العمل الجماعي"
      }
    ],
    "gender": {
      "en": "Any",
      "ar": "أي"
    }
  },
  {
    "id": 2,
    "code": "JOB-102",
    "title": {
      "en": "Gas Operations Engineer",
      "ar": "مهندس عمليات الغاز"
    },
    "company": {
      "en": "Syrian Gas Company",
      "ar": "الشركة السورية للغاز"
    },
    "location": {
      "en": "Homs, Syria",
      "ar": "حمص، سوريا"
    },
    "logo":'http://www.sgc.gov.sy/fello/logo2.jpg',
    "type": {
      "en": "Full Time",
      "ar": "دوام كامل"
    },
    "responsibilities": [
      {
        "en": "Monitor gas pipelines",
        "ar": "مراقبة خطوط أنابيب الغاز"
      },
      {
        "en": "Optimize gas production",
        "ar": "تحسين إنتاج الغاز"
      },
      {
        "en": "Safety inspections",
        "ar": "تفتيشات السلامة"
      }
    ],
    "qualifications": [
      {
        "en": "BSc in Chemical Engineering",
        "ar": "درجة البكالوريوس في الهندسة الكيميائية"
      },
      {
        "en": "Experience in gas operations",
        "ar": "خبرة في عمليات الغاز"
      },
      {
        "en": "Technical skills",
        "ar": "مهارات تقنية"
      }
    ],
    "skills": [
      {
        "en": "Pipeline management",
        "ar": "إدارة الأنابيب"
      },
      {
        "en": "Problem-solving",
        "ar": "حل المشكلات"
      }
    ],
    "gender": {
      "en": "Any",
      "ar": "أي"
    }
  },
  {
    "id": 3,
    "code": "JOB-103",
    "title": {
      "en": "Refinery Process Engineer",
      "ar": "مهندس عمليات مصفاة"
    },
    "company": {
      "en": "Homs Refinery Company",
      "ar": "الشركة العامة لمصفاة حمص"
    },
    "location": {
      "en": "Homs, Syria",
      "ar": "حمص، سوريا"
    },
    "logo":'http://www.sgc.gov.sy/fello/logo2.jpg',
    "type": {
      "en": "Full Time",
      "ar": "دوام كامل"
    },
    "responsibilities": [
      {
        "en": "Monitor refining processes",
        "ar": "مراقبة عمليات التكرير"
      },
      {
        "en": "Optimize production",
        "ar": "تحسين الإنتاج"
      },
      {
        "en": "Ensure quality standards",
        "ar": "ضمان معايير الجودة"
      }
    ],
    "qualifications": [
      {
        "en": "BSc in Chemical Engineering",
        "ar": "درجة البكالوريوس في الهندسة الكيميائية"
      },
      {
        "en": "Experience in refinery",
        "ar": "خبرة في المصفاة"
      },
      {
        "en": "Analytical skills",
        "ar": "مهارات تحليلية"
      }
    ],
    "skills": [
      {
        "en": "Process optimization",
        "ar": "تحسين العمليات"
      },
      {
        "en": "Safety awareness",
        "ar": "الوعي بالسلامة"
      }
    ],
    "gender": {
      "en": "Any",
      "ar": "أي"
    }
  },
  {
    "id": 4,
    "code": "JOB-104",
    "title": {
      "en": "Refinery Maintenance Engineer",
      "ar": "مهندس صيانة المصفاة"
    },
    "company": {
      "en": "Banias Refinery Company",
      "ar": "شركة مصفاة بانياس"
    },
    "location": {
      "en": "Banias, Syria",
      "ar": "بانياس، سوريا"
    },
    "logo":'http://www.sgc.gov.sy/fello/logo2.jpg',
    "type": {
      "en": "Full Time",
      "ar": "دوام كامل"
    },
    "responsibilities": [
      {
        "en": "Maintain refinery equipment",
        "ar": "صيانة معدات المصفاة"
      },
      {
        "en": "Coordinate maintenance team",
        "ar": "تنسيق فريق الصيانة"
      },
      {
        "en": "Ensure operational safety",
        "ar": "ضمان السلامة التشغيلية"
      }
    ],
    "qualifications": [
      {
        "en": "BSc in Mechanical Engineering",
        "ar": "درجة البكالوريوس في الهندسة الميكانيكية"
      },
      {
        "en": "Experience in refinery maintenance",
        "ar": "خبرة في صيانة المصفاة"
      },
      {
        "en": "Technical skills",
        "ar": "مهارات تقنية"
      }
    ],
    "skills": [
      {
        "en": "Equipment maintenance",
        "ar": "صيانة المعدات"
      },
      {
        "en": "Team coordination",
        "ar": "تنسيق الفريق"
      }
    ],
    "gender": {
      "en": "Any",
      "ar": "أي"
    }
  },
  {
    "id": 5,
    "code": "JOB-105",
    "title": {
      "en": "Fuel Distribution Manager",
      "ar": "مدير توزيع المحروقات"
    },
    "company": {
      "en": "Fuel Company",
      "ar": "شركة محروقات"
    },
    "location": {
      "en": "Damascus, Syria",
      "ar": "دمشق، سوريا"
    },
    "logo":'http://www.sgc.gov.sy/fello/logo2.jpg',
    "type": {
      "en": "Full Time",
      "ar": "دوام كامل"
    },
    "responsibilities": [
      {
        "en": "Manage fuel distribution",
        "ar": "إدارة توزيع المحروقات"
      },
      {
        "en": "Ensure logistics efficiency",
        "ar": "ضمان كفاءة اللوجستيات"
      },
      {
        "en": "Coordinate with stations",
        "ar": "التنسيق مع المحطات"
      }
    ],
    "qualifications": [
      {
        "en": "BSc in Logistics or Engineering",
        "ar": "درجة البكالوريوس في اللوجستيات أو الهندسة"
      },
      {
        "en": "Experience in fuel distribution",
        "ar": "خبرة في توزيع المحروقات"
      },
      {
        "en": "Management skills",
        "ar": "مهارات إدارية"
      }
    ],
    "skills": [
      {
        "en": "Logistics",
        "ar": "اللوجستيات"
      },
      {
        "en": "Team management",
        "ar": "إدارة الفريق"
      }
    ],
    "gender": {
      "en": "Any",
      "ar": "أي"
    }
  }
]

  constructor(
    public languageService: LanguageService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.jobId = +params['id'];
      this.job = this.jobs.find((j) => j.id === this.jobId);

      if (!this.job) {
        this.router.navigate(['/careers']);
      }
    });
  }
}
