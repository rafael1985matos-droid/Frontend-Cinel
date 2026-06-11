import { CommonModule } from '@angular/common';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Observable, of } from 'rxjs';

type meuObjeto = {nome: string, endereco: string, numero: number, admin: boolean};
@Component({
  selector: 'app-tipo-de-dados',
  imports: [CommonModule],
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados implements OnInit {
  localString: string = 'meu texto'; /// tipo string /// tipo char 'y'
  localNumber: number = 100; /// tipo number /// long, biglong, int, inteiro.......
  localBoolean: boolean = false; /// tipo boolean
  localArray: string[] = ['Leo', 'Evaldina', 'Paulo', 'Rafael', 'Monica', 'Samara'];
  localArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  localnull: null = null; /// tipo null
  localnull2!: null;
  localundefined: undefined = undefined; /// tipo undefined
  localundefined2: undefined;
  localObjecto = {nome: "tony", endereco: "rua...", numero: 10, admin: false, lado: 'esquerdo'};
  localObjecto2 = {nome: "tony", endereco: "rua...", numero: 10, admin: false};

  /**tipo de dados assincronos*/
  localpromise: Promise<string> = new Promise<string>((resolve, reject) => {
    if (resolve) {
      resolve('Aula de Assincronos em Promise');
    }

    //else {
    reject('Error Http 400');
    //}
  });

  localobservable$ = new Observable((a) => a.next('Aula de assincronos Observables'));
  localobservable2$: Observable<string> = of('Aula de assincronos Observable2');

  /**construtor do JS */
  constructor() {
    console.log('minha variavel de string: ' + this.localString);
    console.log('minha variavel de number: ' + this.localNumber);
    console.log('minha variavel de boolean: ' + this.localBoolean);
    console.log('minha variavel de array: ' + this.localArray);
    console.log('minha variavel de null: ' + this.localnull);
    console.log('minha variavel de undefined: ' + this.localundefined);
    console.log('minha variavel de promise sem pending: ' + this.localpromise);
    console.log('minha variavel de observable sem subscribe: ' + this.localobservable$);
    // console.log("minha variavel de promise com pending: " + this.localpromise);
    // console.log("minha variavel de observable sem subscribe: " + this.localobservable$);
  }

  ngOnInit(): void {
    this.localobservable$.subscribe((data) =>
      console.log('minha variavel de observable com subscribe: ', data as string),
    );
    this.localobservable2$.subscribe({
      next: (result) => console.log('Nosso 2º Observable:' + result),
      error: (e) => console.error('Error do Observable' + e),
      complete: () => console.log('Observable completo'),
    });
  }
}
