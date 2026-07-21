import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  imports: [], 
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})

export class Welcome {
  constructor(private router: Router) {}

  navegarParaFormularios(): void {
    this.router.navigate(['/formularios']); 
  }

  navegarParaTabelas(): void {
    this.router.navigate(['/tabelas-assincronas']);
  }
}


