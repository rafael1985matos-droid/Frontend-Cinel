import { Router, RouterModule } from '@angular/router';
import { AuthStateService } from './../../service/auth-state';
import { Auth } from 'firebase/auth';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { email } from '@angular/forms/signals';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-forms',
  /**um novo modulo o modulo para furmolarios */
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
signInForms: any;
  goback() {
    throw new Error('Method not implemented.');
  }

  /**Variavel para receber o formulario */
  protected signinForms: UntypedFormGroup;

  constructor(
    protected AuthService: AuthStateService,
    protected Router: Router,
    private fb: UntypedFormBuilder,
  ) {
    this.signinForms = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
    /**O controls e a api do form que controla os validators e tb  */
    console.log("nosso controls: ", this.signinForms.controls);
  }

  onSubmit() {
    if (!this.signinForms.valid) {
      /**Aprendendo a mudar a rota pelo TS */
      this.Router.navigateByUrl('/');
    }
    const localFormEmail = this.signinForms.get('email')?.value;
    const localFormPassword = this.signinForms.get('password')?.value;
    const localFormsComplete = this.signinForms.value;
    console.log(
      'Dados do formulario passados individualmente: Email: ${localFormEmail} e Password: ${localFormPassword}',
    );
    console.log('Objeto: formulariocomplet: ${ jSON.stringify(localFormsComplete)}');
  }

  goBack = () => {
    this.signinForms.reset();
    this.Router.navigateByUrl('/');
  };
} //end class
