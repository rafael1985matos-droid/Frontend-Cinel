import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'ebook/interpolacao', pathMatch: 'full' },
  {
    path: 'ebook/interpolacao',
    loadComponent: () =>
      import('./pages/interpolacao/interpolacao').then((c) => c.Interpolacao),
  },
  {
    path: 'ebook/interfaces',
    loadComponent: () =>
      import('./pages/interfaces/interfaces').then((c) => c.Interfaces),
  },
    {
    path: 'ebook/poo',
    loadComponent: () =>
      import('./pages/poo/poo').then((c) => c.Poo),
  },
       {
    path: 'ebook/functions',
    loadComponent: () =>
      import('./pages/functions/functions').then((c) => c.Functions),
  },
  {path: 'ebook/typescript', 
    loadComponent: () => 
    import('./pages/typescript/typescript').then((c) => c.Typescript),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/interpolacao/interpolacao').then((c) => c.Interpolacao),
  },
];
