import { FakeBack } from './../../service/fake-back';
import { catchError, Observable, of, switchMap, take } from 'rxjs';
import { ChangeDetectorRef, Component } from '@angular/core';
import { IUtilizadores } from '../../shared/i-utilizadores';
import { CommonModule } from '@angular/common';

type LocalError = { errorAssync: boolean; errorNome: string };

@Component({
  selector: 'app-assync-tables',
  imports: [CommonModule],
  templateUrl: './assync-tables.html',
  styleUrl: './assync-tables.css',
})
export class AssyncTables {
  ///utilizador Promise/then&catch
  localUserPromise: IUtilizadores[] = [];

  ///utilizador com assync await
  localUserAssyncPromise: IUtilizadores[] = [];

  ///utilizador com Observable
  localUserObservable$: Observable<IUtilizadores[]>;
  
  localUserSubscrition: IUtilizadores[] = [];

  /// criação das variaveis de error
  errorPromise: LocalError = { errorAssync: false, errorNome: '' };
  errorAssyncAwaitPromise: LocalError = { errorAssync: false, errorNome: '' };
  errorObservable: LocalError = { errorAssync: false, errorNome: '' };

  ///falaremos sobre DI ou Injeção de Dependência

  constructor(
    protected fakeBack: FakeBack,
    private cdr: ChangeDetectorRef,
  ) {
    this.localUserObservable$ = fakeBack.getUtilizadoresOservable();

    ///invocando o metodo de Promise
    this.carregarPromise();
    //invocando o 2º metodo de promise
    this.carregarAssyncAwaitPromise();

    ///invocando o metodo Observable
    this.carregarObservable();

    //this.cdr.detectChanges();
  }

  carregarPromise = () => {
    this.fakeBack
      .getUtilizadoresPromise()
      .then((res: IUtilizadores[]) => {
        // console.log('Nosso Result:', res);
        this.cdr.detectChanges();
        return (this.localUserPromise = res);
      })
      .catch((e) => {
        // console.error('Nosso Error:', e);
        this.errorPromise = { errorAssync: true, errorNome: 'Error no carregarPromise():' + e };
        this.localUserPromise = [];
      });
  };

  /** ASYNC & AWAIT
   *
   */

  carregarAssyncAwaitPromise() {
    this.fakeBack
      .getUtilizadoresAsync()
      .then((res: IUtilizadores[]) => {
        console.log('Nosso Result:', res);
        this.localUserAssyncPromise = res;
      })
      .catch((error) => {
        console.error('Nosso Error em carregarAsyncAwaitPromise:', error);
        this.localUserAssyncPromise = [];
        this.errorAssyncAwaitPromise = {
          errorAssync: true,
          errorNome: 'Error no carregarAsyncAwaitPromise(): ' + error,
        };
      });
  };
  carregarObservable = () => {
    ///falar um pouco sobre RxJS
    ///operador take (1), este cara faz com que apos 1 subscrição o canal de dados seja fechado
    this.fakeBack.getUtilizadoresOservable().pipe(
      take(1),
      switchMap((res: IUtilizadores[]) => {
      console.error('Nosso Result em carregarObservable():', res);
      this.localUserSubscrition = res;
      this.cdr.detectChanges();
      return this.localUserSubscrition;

    }), catchError((error) => {
      console.error('Nosso Error em carregarAsyncAwaitPromise:', error);
      this.errorObservable = {errorAssync: true, errorNome: "Erro no metodo carregarObservable: " + error};
      return of([]);

    }),
  
  ).subscribe()
};
  carregarObservableComSubscribleObjeto = () => {
    ///falar um pouco sobre RxJS
    ///operador take (1), este cara faz com que apos 1 subscrição o canal de dados seja fechado
    this.fakeBack.getUtilizadoresOservable().pipe(
      take(1),
      switchMap((res: IUtilizadores[]) => {
      console.log('arregarObservableComSubscribleObjeto():', res);
      return res;
      }),

    ).subscribe({
      next: (Result) => {console.log("nosso dado: ", Result)},
      error: (e) => console.log("nosso Erro no metodo carregarObservableComSubscribleObjeto()" + e),
      complete: () => console.log("nosso complete, terminou o Observable"),
    });
  }; 
    
  } ///endclass
