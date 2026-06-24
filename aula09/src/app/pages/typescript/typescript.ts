import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css',
})
export class Typescript implements OnInit {
  ///quando temos mais de um tipo de uma, temos que fazer o CASTING
  numeroDACasa: number | string | undefined | null;
  numeroDaLoja: string;

  constructor() {
    this.numeroDACasa = 1;
    this.numeroDaLoja = '1';
  }
  ngOnInit(): void {
    /// este aqui recebe somente 1 tipo de dado e precisa fazer o cast
    const localNumber: number = this.numeroDACasa as number;
    ///posso fazer o Casting pelo operador Diamante
    const localNumber2: number = <number>this.numeroDACasa;
    ///este aqui recebe os 4 tipos de dados
    this.numeroDACasa = this.numeroDaLoja;

    console.log('Nosso numero: ' + localNumber, 'Nosso outro numero;' + localNumber2);
  }

  meuNumeroDeCasa(): number {
    const localNome = 'Tony';
    console.log('Nosso numero: ' + this.meuNumeroDeCasa, 'Nosso outro numero;' + this.numeroDaLoja);
    console.log('Minha String' + localNome);
    return this.numeroDACasa as number;

  meuNome(): String | undefined {
    const localNome = 'Tony';
    console.log('Nosso numero: ' + this.meuNumeroDeCasa, 'Nosso outro numero;' + this.numeroDaLoja);
    console.log('Minha String' + localNome);
    return "Meu nome é Tony";
    // return undefined;
  }
}
