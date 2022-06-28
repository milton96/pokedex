import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogUtil } from '../utils/log.util';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
    private log: LogUtil
  ) { }

  /**
   * getListPokemon
   */
  public getListPokemon(): void {
    this.log.log("Obtener lista de Pokémon");
  }
}
