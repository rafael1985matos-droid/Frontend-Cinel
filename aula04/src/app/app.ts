import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Paragrafo } from "./paragrafo/paragrafo";
import { Texto } from "./texto/texto";
import { Imagens } from "./imagens/imagens";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Paragrafo, Texto, Imagens],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exHTML');
}
