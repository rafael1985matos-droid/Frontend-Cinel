import { Component } from '@angular/core';
import { ItemProjeto, SandBoxService } from '../../service/dummy/sand-box';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-observable-pipeasync',
  imports: [AsyncPipe],
  templateUrl: './observable-pipeasync.html',
  styleUrl: './observable-pipeasync.css',
})
export class ObservablePipeasync {

   // O sinal "$" no fim é uma convenção para indicar que a variável guarda um Stream/Observable
  projetos$!: Observable<ItemProjeto[]>;

   constructor(private sandBoxService: SandBoxService) {}

  ngOnInit(): void {
    // Apenas guardamos a referência do fluxo puro, sem fazer .subscribe()
    this.projetos$ = this.sandBoxService.getDadosComoObservable();
  }
}


