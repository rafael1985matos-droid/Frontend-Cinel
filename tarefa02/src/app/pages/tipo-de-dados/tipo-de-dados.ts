import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tipo-de-dados',
  imports: [CommonModule],
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados implements OnInit {
  localString: string = 'meu texto'; /// tipo string /// tipo char
  localNumber: number = 100; /// tipo de número /// long, biglong, int, inteiro....
  localBolean: boolean = false; /// tipo bollean
  localArray: string[] = ['Leo', 'Evaldina', 'Rafael', 'Paulo', 'Monica', 'Samara'];
  localArray2: number[] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  localNull: null = null;
  localNull2: null | undefined;
  localUndefined: undefined = undefined;
  LocalUndefine2?: undefined;

  /**tipo de dados assíncronos */
  localPromise: Promise<String> = new Promise<string>((e) => {
    return 'Aula de assíncronos';
  });
  localObservable$ = new Observable((a) => a.next('Aula de assíncronos Observables'));
  localObservable2$: Observable<string> = of('Aula de assíncronos Observables2');

  /**construtor di JS */
  constructor() {
    this.localObservable$.subscribe(data => console.log("minha variavel de Observable sem subscribe", data));
    this.localPromise.then(result => console.log("minha variavel de Promise com then", result));


    console.log('minha variavel de String: ', this.localString);
    console.log('minha variavel de Number: ', this.localNumber);
    console.log('minha variavel de Bollean: ', this.localBolean);
    console.log('minha variavel de Array: ', this.localArray);
    console.log('minha variavel de Null: ', this.localNull);
    console.log('minha variavel de Undefined: ', this.localUndefined);
    console.log('minha variavel de Promise sem pending: ', this.localPromise);
    console.log('minha variavel de Observable sem subscribe: ', this.localObservable$);
  }
  ngOnInit(): void {
    this.localObservable$.subscribe((data) => 
      console.log("minha variavel do observable$ com subscribe", data as string)),
    this.localPromise.then((result) => console.log("minha variavel de promise com then", result));

  }
}
