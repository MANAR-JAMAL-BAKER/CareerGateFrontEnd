import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareersService {
  private jobs: any = [
    {
      id: 1,
      code: 'JOB-101',
      title: { en: 'Petroleum Engineer', ar: 'مهندس بترول' },
      company: { en: 'Syrian Petroleum Company', ar: 'الشركة السورية للنفط' },
      location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
      logo: 'logos/companies/oil-company-logo.png',
      category: { en: 'Engineering', ar: 'الهندسة' },
      type: { en: 'Full Time', ar: 'دوام كامل' },
      role: { en: 'Field Operations', ar: 'عمليات ميدانية' },
      postedDate: '2025-08-05',
      featured: true,
      responsibilities: [
        {
          en: 'Manage oil extraction processes.',
          ar: 'إدارة عمليات استخراج النفط.',
        },
        { en: 'Coordinate with drilling teams.', ar: 'التنسيق مع فرق الحفر.' },
        {
          en: 'Ensure safety compliance.',
          ar: 'ضمان الامتثال لمعايير السلامة.',
        },
      ],
      qualifications: [
        {
          en: 'BSc in Petroleum Engineering',
          ar: 'درجة البكالوريوس في هندسة البترول',
        },
        { en: '3+ years experience', ar: 'خبرة أكثر من 3 سنوات' },
        { en: 'Analytical skills', ar: 'مهارات تحليلية' },
      ],
      skills: [
        { en: 'Problem-solving', ar: 'حل المشكلات' },
        { en: 'Teamwork', ar: 'العمل الجماعي' },
      ],
      gender: { en: 'Any', ar: 'أي' },
    },
   {
  id: 4,
  code: 'JOB-104',
  title: { en: 'Petroleum Engineer', ar: 'مهندس نفط' },
  company: { en: 'Syrian Petroleum Company', ar: 'الشركة السورية للنفط' },
  location: { en: 'Deir Ezzor, Syria', ar: 'دير الزور، سوريا' },
  logo: 'logos/companies/oil-company-logo.png',
  category: { en: 'Engineering', ar: 'الهندسة' },
  type: { en: 'Full Time', ar: 'دوام كامل' },
  role: { en: 'Production', ar: 'الإنتاج' },
  postedDate: '2025-08-12',
  featured: false,
},
    {
      id: 3,
      code: 'JOB-103',
      title: { en: 'Pipeline Operator', ar: 'مشغل خطوط أنابيب' },
      company: { en: 'Syrian Gas Company', ar: 'الشركة السورية للغاز' },
      location: { en: 'Damascus, Syria', ar: 'دمشق، سوريا' },
      logo: 'logos/companies/gas-company-logo.jpg',
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
      logo: 'logos/companies/mahrokat-company-logo.jpeg',
      category: { en: 'Management', ar: 'إدارة' },
      type: { en: 'Full Time', ar: 'دوام كامل' },
      role: { en: 'Distribution', ar: 'التوزيع' },
      postedDate: '2025-08-18',
      featured: true,
    },
  ];
  constructor(private http: HttpClient) {}

  getJobDetails(): Observable<any> {
    return of({
      id: 1,
      code: 'JOB-101',
      title: {
        en: 'Petroleum Engineer',
        ar: 'مهندس بترول',
      },
      company: {
        en: 'Syrian Petroleum Company',
        ar: 'الشركة السورية للنفط',
      },
      companyDescription: {
        en: 'The Syrian Petroleum Company (SPC) is a state-owned enterprise responsible for the exploration, production, and development of oil and gas resources in Syria. Established in 1974, SPC plays a central role in managing the country’s hydrocarbon sector.',
        ar: 'الشركة السورية للنفط (SPC) هي مؤسسة وطنية مملوكة للدولة، مسؤولة عن استكشاف وإنتاج وتطوير موارد النفط والغاز في سوريا. تأسست عام 1974 وتلعب دوراً محورياً في إدارة قطاع الهيدروكربونات في البلاد.',
      },
      location: {
        en: 'Damascus, Syria',
        ar: 'دمشق، سوريا',
      },
      logo: 'http://www.sgc.gov.sy/fello/logo2.jpg',
      type: {
        en: 'Full Time',
        ar: 'دوام كامل',
      },
      responsibilities: [
        {
          en: 'Plan, supervise, and optimize all daily oil extraction and production operations to maximize efficiency and output.',
          ar: 'تخطيط والإشراف على وتحسين جميع عمليات استخراج وإنتاج النفط اليومية لتعزيز الكفاءة والإنتاج.',
        },
        {
          en: 'Coordinate closely with drilling, geology, and maintenance teams to ensure seamless integration of field activities.',
          ar: 'التنسيق الوثيق مع فرق الحفر والجيولوجيا والصيانة لضمان تكامل سلس لأنشطة الموقع.',
        },
        {
          en: 'Strictly enforce and monitor compliance with all HSE (Health, Safety, and Environment) policies and procedures to maintain a zero-incident work environment.',
          ar: 'فرض ومراقبة الامتثال لجميع سياسات وإجراءات الصحة والسلامة والبيئة (HSE) للحفاظ على بيئة عمل خالية من الحوادث.',
        },
        {
          en: 'Analyze production data and prepare detailed reports on output, efficiency, and potential issues for management review.',
          ar: 'تحليل بيانات الإنتاج وإعداد تقارير مفصلة عن الإنتاج والكفاءة والمشكلات المحتملة لمراجعة الإدارة.',
        },
        {
          en: 'Troubleshoot and resolve technical issues with extraction equipment, minimizing downtime and production losses.',
          ar: 'تشخيص وحل المشكلات الفنية في معدات الاستخراج، وتقليل وقت التوقف وفقدان الإنتاج.',
        },
        {
          en: 'Manage the allocation of resources, including personnel, equipment, and materials, for extraction projects.',
          ar: 'إدارة تخصيص الموارد، بما في ذلك الموظفون والمعدات والمواد، لمشاريع الاستخراج.',
        },
        {
          en: 'Implement and oversee well stimulation and enhanced oil recovery (EOR) techniques to improve field performance.',
          ar: 'تنفيذ والإشراف على تقنيات تحفيز الآبار والتعافي المحسن للنفط (EOR) لتحسين أداء الموقع.',
        },
      ],
      qualifications: [
        {
          en: 'Bachelor’s Degree in Petroleum Engineering, Chemical Engineering, or a related field. A Master’s degree is preferred.',
          ar: 'درجة البكالوريوس في هندسة البترول، الهندسة الكيميائية، أو مجال ذي صلة. درجة الماجستير مُفضَّلة.',
        },
        {
          en: 'Minimum of 5 years of hands-on experience in oil extraction and production operations within the upstream sector.',
          ar: 'حد أدنى 5 سنوات من الخبرة العملية في عمليات استخراج وإنتاج النفط في قطاع المنبع (Upstream).',
        },
        {
          en: 'In-depth knowledge of reservoir engineering principles, production technologies, and well intervention techniques.',
          ar: 'معرفة متعمقة بمبادئ هندسة المكامن وتقنيات الإنتاج وتقنيات التدخل في الآبار.',
        },
        {
          en: 'Proven analytical and problem-solving skills with experience in using production software and data analysis tools.',
          ar: 'مهارات تحليلية مثبتة وقدرة على حل المشكلات مع خبرة في استخدام برامج الإنتاج وأدوات تحليل البيانات.',
        },
        {
          en: 'Strong project management skills, with the ability to lead projects from conception to completion.',
          ar: 'مهارات قوية في إدارة المشاريع، مع القدرة على قيادة المشاريع من التصوّر إلى الانتهاء.',
        },
        {
          en: 'Relevant professional certifications (e.g., P.Eng, PMP) are a significant asset.',
          ar: 'الشهادات المهنية ذات الصلة (مثل P.Eng, PMP) تعتبر ميزة كبيرة.',
        },
      ],
      skills: [
        {
          en: 'Advanced Problem-Solving and Critical Thinking',
          ar: 'مهارات متقدمة في حل المشكلات والتفكير النقدي',
        },
        {
          en: 'Leadership and Team Management',
          ar: 'القدرة على القيادة وإدارة الفريق',
        },
        {
          en: 'Excellent Verbal and Written Communication',
          ar: 'مهارات تواصل شفهي وكتابي ممتازة',
        },
        {
          en: 'Technical Proficiency in Production Software (e.g., PIPESIM, Prosper)',
          ar: 'إتقان تقني لبرامج الإنتاج (مثل PIPESIM, Prosper)',
        },
        {
          en: 'Strong Decision-Making and Risk Assessment',
          ar: 'قوة في اتخاذ القرارات وتقييم المخاطر',
        },
        {
          en: 'Collaboration and Cross-Functional Teamwork',
          ar: 'القدرة على التعاون والعمل الجماعي بين الوظائف المختلفة',
        },
        {
          en: 'Attention to Detail and Commitment to Quality',
          ar: 'الانتباه إلى التفاصيل والالتزام بالجودة',
        },
        {
          en: 'Adaptability and ability to work under pressure in a fast-paced environment',
          ar: 'المرونة والقدرة على العمل تحت الضغط في بيئة سريعة الخطى',
        },
      ],
      gender: {
        en: 'Any',
        ar: 'أي',
      },
    });
  }
  getAllJobs() {
    return of(this.jobs);
  }
  getOtherJobs(currentJobId: number) {
    return this.jobs.filter((job: any) => job.id !== currentJobId);
  }
}
