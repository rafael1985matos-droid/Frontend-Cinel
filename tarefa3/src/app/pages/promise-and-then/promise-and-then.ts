import { Component, OnInit } from '@angular/core';
import { ItemProjeto, SandBoxService } from '../../service/dummy/sand-box';

@Component({
  selector: 'app-promise-and-then',
  imports: [],
  templateUrl: './promise-and-then.html',
  styleUrl: './promise-and-then.css',
})
export class PromiseAndThen implements OnInit {
   projetos: ItemProjeto[] = [];
  carregando: boolean = true;
  erro: string | null = null;

  constructor(private sandBoxService: SandBoxService) {}

  ngOnInit(): void {
    // Consumo clássico da Promise usando o encadeamento de métodos encadeados
    this.sandBoxService.getDadosComoPromise()
      .then((dados: ItemProjeto[]) => {
        // Bloco executado quando a Promise é resolvida com sucesso
        this.projetos = dados;
        this.carregando = false;
      })
      .catch((err) => {
        // Bloco executado caso ocorra alguma rejeição ou falha
        this.erro = 'Ocorreu um erro ao resolver os dados com .then()';
        this.carregando = false;
      });
  }
}
