import { Injectable } from '@angular/core';
import { IUtilizadores } from '../shared/i-utilizadores';
import { DataDummy } from './dummy/sand-box';
import { catchError, delay, from, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeBack {
  localUtilizador: IUtilizadores[] = DataDummy;

  /**1º é a Promise */
  // =====================================================
  // MÉTODO 1 - PROMISE
  // =====================================================
  // Este método retorna uma Promise
  // Ideal para ensinar .then() e .catch()
  // =====================================================

  getUtilizadoresPromise(): Promise<IUtilizadores[]> {
    return new Promise((resolve, reject) => {
      // simular um http ou requisição de uma API usaremos o stTimeout()
      setTimeout(() => {
        //para simular im error criaremos uma variavel
        const sucesso = Math.random() > 0.5;
        if (sucesso) {
          /// se fosse uma API retornaria nossos dados, um Json, uma Stream... etc
          resolve(this.localUtilizador);
        } else {
          reject('Error http 500');
        }
      }, 2000);
    });
  }

  // =====================================================
  // MÉTODO 2 - ASYNC / AWAIT
  // =====================================================
  // Este método também retorna Promise
  // Mas utiliza async/await
  // =====================================================

  async getUtilizadoresAsync(): Promise<IUtilizadores[]> {
    try {
      const data = await this.getUtilizadoresPromise();
      return data;
    } catch (error) {
      console.log('nosso metodo getUtilizadoresAsync() ', error);
      throw error;
    }
  }

  // =====================================================
  // MÉTODO 3 - OBSERVABLE
  // =====================================================
  // Observable é muito utilizado no Angular
  // HttpClient retorna Observable
  // as vezes temos que converter uma Promise para trabalhar com Observable
  // =====================================================

  getUtilizadoresOservable(): Observable<IUtilizadores[]> {
    //simula sucesso ou erro
    const sucesso = Math.random() > 0.5;
    if (!sucesso) {
      return throwError(() => new Error('Error 404 Http'));
    }

    // FROM() este operador transforma uma promise em Observable
    //OF() este operador transforma um List ou Array ou Objeto em Observable
    const localPromise: Promise<IUtilizadores[]> = this.getUtilizadoresPromise();
    return from(localPromise).pipe(
      delay(2000),
      catchError((error) => {
        console.error('Error No Observable', error);
        throw error;
      }),
    );
  }
} // end class
