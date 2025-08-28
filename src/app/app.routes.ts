import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout.component').then(
        (c) => c.MainLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./features/news/news.component').then(
            (c) => c.NewsComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.component').then(
            (c) => c.AboutComponent
          ),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./features/contact-us/contact-us.component').then(
            (c) => c.ContactUsComponent
          ),
      },
      {
        path: 'careers',
        loadComponent: () =>
          import('./features/careers/careers.component').then(
            (c) => c.CareersComponent
          ),
      },
         {
        path: 'careers/:id',
        loadComponent: () =>
          import('./features/careers-details/careers-details.component').then(
            (c) => c.CareersDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component').then(
        (c) => c.AdminLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./features/admin/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
