import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {path: '', redirectTo:'welcome', pathMatch: 'full'},
    {path: 'welcome', loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
    {path: 'observable-pipeasync', loadComponent: () => import('./pages/observable-pipeasync/observable-pipeasync').then(c => c.ObservablePipeasync)},
    {path: 'observable-with-subscrition', loadComponent: () => import('./pages/observable-with-subscrition/observable-with-subscrition').then(c => c.ObservableWithSubscrition)},
    {path: 'promise-and-then', loadComponent: () => import('./pages/promise-and-then/promise-and-then').then(c => c.PromiseAndThen)},
    {path: 'promise-async-await', loadComponent: () => import('./pages/promise-async-await/promise-async-await').then(c => c.PromiseAsyncAwait)},



    {path: '**', loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)}
];
