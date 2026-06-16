import { Component } from '@angular/core';

@Component({
  selector: 'app-lacos',
  imports: [],
  templateUrl: './lacos.html',
  styleUrl: './lacos.css',
})
export class Lacos {
  minhaCores: string[] = ['azul', 'vermelho', 'roxo', 'verde', 'preto'];

  constructor() {
    this.minhaCores[0];
    this.minhaCores[1];
    this.minhaCores[2];
    this.minhaCores[3];
    this.minhaCores[4];
    //this.minhaCores[5; no java e error];
    //for tradicional
    this.exemploForTradicional();
    //for of
    this.exemploForOf(); 
    // for Each
    this.exemploFprEach();

  }
  //for tradicional
  exemploForTradicional = () => {
    ///for tradicional
    for (let i = 0; i < this.minhaCores.length; i++) {
      const element = this.minhaCores[i];
      console.log('Nosso Array:', element, 'meu andar do predio de cores: ' + i);
    }
  };

  exemploForOf () {
    for (const data of this.minhaCores){
      console.log("Nosso Array For Of: ", data,);
    }
  }
  ///for Each
exemploFprEach = () => {
  // this.minhaCores.forEach(element => console.log("Nosso Array ForEach:", element));
  this.minhaCores.forEach(element => {
    console.log("Nosso Array ForEach:", element);
  });


}





} // fim da classe
