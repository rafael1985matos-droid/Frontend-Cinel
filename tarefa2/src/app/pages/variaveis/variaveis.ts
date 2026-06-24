import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  imports: [],
  templateUrl: './variaveis.html',
  styleUrl: './variaveis.css',
})
export class Variaveis {
  ///variaveis globais
  nome = 'rafael';
  localObjecto = { nome: 'tony', endereco: 'rua...', numero: 10, admin: false, lado: 'esquerdo' };

  constructor() {
    console.log('Minha variavel global Objeto no constructor():', this.localObjecto);
    ///invocar no constructor
    this.metodoTestConst();
    this.metodoTesteLet();
    this.metodoTestConst2();
    this.metodoTestLet2();
  }
  metodoTesteLet() {
    console.log('Minha variavel global Objeto no metodotestelet():', this.localObjecto);
    this.nome = 'Rafael';
    console.log('Minha variavel global nome metodoTesteLet():', this.localObjecto);
  }
  metodoTestConst() {
    console.log('Minha variavel global Objeto no metodotestconst():', this.localObjecto);
    this.nome = 'Paulo';
    console.log('Minha 0variavel global nome metodotestconst():', this.localObjecto);
  }
  metodoTestConst2 = () => {
    // var nome = 'tony'
    ///escopo local NÃO usa this
    const localNome = ' tony filho';
    console.log('Minha 0variavel global nome metodotestconst():', localNome);
  };
  metodoTestLet2 = () => {
    // var nome = 'tony'
    ///escopo local NÃO usa this
    let localNome = ' tony filho';
    console.log('Minha variavel const localNome no metodotesLet2:', localNome);
    localNome = 'Monica';
    console.log('Minha variavel const localNome no metodotesLet2:', localNome);
  };
}
