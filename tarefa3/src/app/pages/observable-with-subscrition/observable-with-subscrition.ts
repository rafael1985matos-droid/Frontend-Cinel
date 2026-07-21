import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemProjeto, SandBoxService } from '../../service/dummy/sand-box';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-with-subscrition',
  imports: [],
  templateUrl: './observable-with-subscrition.html',
  styleUrl: './observable-with-subscrition.css',
})
export class ObservableWithSubscrition implements OnInit, OnDestroy{
// Variáveis de estado local que serão lidas diretamente no HTML
  projetos: ItemProjeto[] = [];
  carregando: boolean = true;
  erro: string | null = null;
  
  // Objeto que guardará a referência da inscrição ativa do stream
  private meuSub!: Subscription;

  constructor(private sandBoxService: SandBoxService) {}

  ngOnInit(): void {
    // Iniciamos a escuta manual do Observable assim que o componente carrega
    this.meuSub = this.sandBoxService.getDadosComoObservable().subscribe({
      next: (dados) => {
        this.projetos = dados;
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Não foi possível carregar o fluxo de dados.';
        this.carregando = false;
      }
    });
  }

  ngOnDestroy(): void {
    // EXTREMAMENTE IMPORTANTE: Destrói a inscrição quando o usuário troca de página
    if (this.meuSub) {
      this.meuSub.unsubscribe();
      console.log('Inscrição destruída com sucesso para evitar memory leak.');
    }
  }
}

