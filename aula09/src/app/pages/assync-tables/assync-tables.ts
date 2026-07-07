import { FakeBack } from './../../service/fake-back';
import { Observable } from 'rxjs';
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
  //localUserAssyncPromise: IUtilizadores[] = [];

  ///utilizador com Observable
  //localUserObservable$: Observable<IUtilizadores[]>;

  /// criação das variaveis de error
  errorPromise: LocalError = { errorAssync: false, errorNome: '' };
  //errorAssyncAwaitPromise: LocalError = { errorAssync: false, errorNome: '' };
  //errorObservable: LocalError = { errorAssync: false, errorNome: '' };

  ///falaremos sobre DI ou Injeção de Dependência

  constructor(
    protected fakeBack: FakeBack, 
    private cdr: ChangeDetectorRef,
  ) {
    //this.localUserObservable$ = fakeBack.getUtilizadoresOservable();

    ///invocando o metodo de Promise
    this.carregarPromise();
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

  carregarAssyncAwaitPromise() {}

  carregarObservable = () => {};
} ///endclass
