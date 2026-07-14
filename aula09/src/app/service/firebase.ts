import { Injectable } from '@angular/core';
import { app } from '../app.config';
import { Auth, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class Firebaseservice {
  auth: Auth;

  constructor() {
    this.auth = getAuth(app);
  }
}
