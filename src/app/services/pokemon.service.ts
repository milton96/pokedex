import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { LogUtil } from '../utils/log.util';
import { ErrorUtil } from '../utils/error.util';

import { environment } from '../../environments/environment';

import { Pagination } from '../interfaces/pagination';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUri: string = environment.baseUri;

  constructor(private http: HttpClient, private log: LogUtil, private error: ErrorUtil) {}

  /**
   * getListPokemon
   */
  public getListaPokemon(): Observable<Pagination> {
    //this.log.info('Obteniendo lista de Pokémon');
    return this.http.get<Pagination>(`${this.baseUri}/pokemon/`);
  }

  public getPokemon(name: string): Observable<Pokemon> {
    //this.log.info('Obteniendo Pokémon');
    const url = `${this.baseUri}/pokemon/${name}`;
    return this.http.get<Pokemon>(url);
    // .pipe(
    //   tap((_) => this.log.info(`Pokémon ${name} encontrado`)),
    //   catchError(
    //     this.error.handleError<Pokemon>('getPokemon', undefined)
    //   )
    // );
  }
}
