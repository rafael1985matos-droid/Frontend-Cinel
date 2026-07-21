import { Component, OnInit } from '@angular/core';
import { ItemProjeto, SandBoxService } from '../../service/dummy/sand-box';

@Component({
  selector: 'app-promise-async-await',
  imports: [],
  templateUrl: './promise-async-await.html',
  styleUrl: './promise-async-await.css',
})
export class PromiseAsyncAwait implements OnInit {
 projetos: ItemProjeto[] = [];
  carregando: boolean = true;
  erro: string | null = null;

  constructor(private sandBoxService: SandBoxService) {}

  // A palavra-chave 'async' indica que esta função lida com Promises de forma moderna
  async ngOnInit(): Promise<void> {
    try {
      // O 'await' pausa a execução da função até que a Promise seja resolvida
      this.projetos = await this.sandBoxService.getDadosComoPromise();
    } catch (err) {
      // Se a Promise for rejeitada, o erro cai direto aqui no catch
      this.erro = 'Ocorreu um erro ao resolver a Promise com Async/Await.';
    } finally {
      // Executado sempre após o sucesso ou erro, fechando o estado de carregamento
      this.carregando = false;
    }
  }
}


