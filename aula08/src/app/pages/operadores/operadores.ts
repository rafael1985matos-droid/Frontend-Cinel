import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operadores',
  imports: [],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores {
  /// Operadores aritmeticos
  /// soma, subtração, multiplicação, divisão, resto
  localAritmeticos: string = '+, -, *, /, % ';

  /// Operadores de Comparação
  /// Comparação sem tipagem, comparação com tipagem, diferente sem tipagem, diferente com tipagem,
  /// maior, menor, maior &igual, menor&igual
  localComparacao: string = '==, ===, !=, !==, >, <, >=, <=';

  exemplOperador = '3'; // se usar == o compilador vai falar que é if(3 == exemploOperador)
  exemplOperador3Iguais = '3'; // se usar === o compilador vai falar que é if(3 === "3"); false

  /// Operadores Lógicos
  /// & o E, é 100% true
  /// || o Ou pode ter 1 True
  /// ? o coalescência nula, ou um e outro, substitui o if e else
  localLogicos: string = '&&, ||, ??';

  /// Operador de Atribuição
  /** Obs: em outras linguagens pode aparecer assim: =+, ou =- */
  exemploNumber = 10;
  localAtribuicao: string = ' =, +=, -=';

  /// Operador Ternário
  /// Cursos
  localTernario: string = "localName = this.Cursos ? 'curso de java': 'curso de JS'";

  constructor() {
    let exemploNumber = 10;
    /// Quanto tem na variavel exemploNumber ????
    this.exemploNumber += 20;

    let localTernario = exemploNumber ? 50 : 100;
    /** Ternario permite fazer uma pre checagem, exemplo abaixo onde se na 
    variavel for igual ao valor 30, eu faço a atribuição valor 50 senão eu faço valor de 100
     */
    let localTernario2 = exemploNumber === 30 ? 50 : 100;  ///
  }
}
