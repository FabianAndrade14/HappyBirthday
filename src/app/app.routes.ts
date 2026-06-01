import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },
  {
    path: 'birthday',
    loadComponent: () =>
      import('./pages/birthday/birthday.component')
        .then(m => m.BirthdayComponent)
  }
];