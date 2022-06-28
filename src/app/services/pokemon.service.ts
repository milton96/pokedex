import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LogUtil } from '../utils/log.util';
import { environment } from '../../environments/environment';
import { Pagination } from '../interfaces/pagination';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUri: string = environment.baseUri;

  constructor(private http: HttpClient, private log: LogUtil) {}

  /**
   * getListPokemon
   */
  public getListaPokemon(): Observable<Pagination> {
    this.log.info('Obteniendo lista de Pokémon');
    return this.http
      .get<Pagination>(`${this.baseUri}/pokemon/?limit=6`)
      .pipe(catchError(this.handleError<Pagination>('getListaPokemon', {} as Pagination)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
