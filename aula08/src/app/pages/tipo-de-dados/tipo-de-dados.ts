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

  localString: string = "meu texto"; /// tipo string /// tipo char 'y'
  localNumber: number = 100; /// tipo number /// long, biglong, int, inteiro.......
  localBoolean: boolean = false; /// tipo boolean 
  localArray: string [] = ["Leo", "Evaldina", "Paulo", "Rafael", "Monica", "Samara",];
  localArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  localnull: null = null; /// tipo null
  localnull2!: null;
  localundefined: undefined = undefined; /// tipo undefined
  localundefined2: undefined; 

  /**tipo de dados assincronos*/
  localpromise: Promise<string>= new Promise<string>(e => {return "Aula de assincronos"});
  localobservable$ = new Observable(a => a.next("Aula de assincronos Observable"));
  localobservable2$: Observable<string> = of("Aula de assincronos Observable");

  /**construtor do JS */
  constructor () {
  

    console.log("minha variavel de string: " + this.localString);
    console.log("minha variavel de number: " + this.localNumber);
    console.log("minha variavel de boolean: " + this.localBoolean);
    console.log("minha variavel de array: " + this.localArray);
    console.log("minha variavel de null: " + this.localnull);
    console.log("minha variavel de undefined: " + this.localundefined);
    console.log("minha variavel de promise sem pending: " + this.localpromise);
    console.log("minha variavel de observable sem subscribe: " + this.localobservable$);
    // console.log("minha variavel de promise com pending: " + this.localpromise);
    // console.log("minha variavel de observable sem subscribe: " + this.localobservable$);
    
    
}

    ngOnInit(): void {
        this.localobservable$.subscribe(data => console.log("minha variavel de observable com subscribe: " , data as string));
        this.localpromise.then(result => console.log("************minha variavel de promise com pending: " , result));
}
}