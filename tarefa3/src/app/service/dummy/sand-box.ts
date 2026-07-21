import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

// Interface que define a estrutura de dados das tabelas assíncronas
export interface ItemProjeto {
  id: number;
  titulo: string;
  Codigo: string;
  tipoAssincrono: string;
  status: 'Concluído' | 'Em Progresso' | 'Pendente';
}

@Injectable({
  providedIn: 'root'
})
export class SandBoxService {

  // Dados fictícios que alimentam o ecossistema da aplicação
  private listaId: ItemProjeto[] = [
    { id: 1, titulo: 'Tarefa 1', Codigo: 'Reactive Forms', tipoAssincrono: 'Promise (.then)', status: 'Concluído' },
    { id: 2, titulo: 'Tarefa 2', Codigo: 'Async Pipe', tipoAssincrono: 'Observable ($)', status: 'Em Progresso' },
    { id: 3, titulo: 'Tarefa 3', Codigo: 'Async Validators', tipoAssincrono: 'Async / Await', status: 'Pendente' },
    { id: 4, titulo: 'Tarefa 4', Codigo: 'RxJS Operators', tipoAssincrono: 'Observable (Subscribe)', status: 'Concluído' }
  ];

  constructor() {}

  /**
   * Fornece dados envelopados em uma Promise instantânea para evitar travar o SSR
   */
  getDadosComoPromise(): Promise<ItemProjeto[]> {
    return Promise.resolve(this.listaId);
  }

  /**
   * Fornece dados em um fluxo contínuo Observable instantâneo
   */
  getDadosComoObservable(): Observable<ItemProjeto[]> {
    return of(this.listaId);
  }
}
