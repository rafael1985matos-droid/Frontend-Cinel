import { routes } from './../app.routes';
import { environment } from './../../environment/environment';
import { Auth, User } from 'firebase/auth';
import { EnvironmentInjector, inject, Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { Firebaseservice } from './firebase';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private Auth = inject(Firebaseservice).auth;
  private environmentInjector = inject(EnvironmentInjector);
  private routes = inject(Router);
  ///este é um observable do tipo Hot
  private user$ = new BehaviorSubject<User | null>(null);
}
