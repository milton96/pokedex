import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { Pokemon } from 'src/app/interfaces/pokemon';

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public pokemon: Pokemon[] = [];

  private _next: string|null|undefined = null;
  private _previous: string|null|undefined = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getListaPokemon();
  }

  /**
   * getListaPokemon
   */
  public getListaPokemon(url?: string|null|undefined): void {
    this.pokemonService.getListaPokemon(url).subscribe(response => {
      this._next = response.next;
      this._previous = response.previous;
      const arr: Observable<Pokemon>[] = [];
      response.results.forEach(r => {
        arr.push(this.pokemonService.getPokemon(r["name"]));
      });
      forkJoin(arr).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    });
  }

  public next() {
    if (this._next)
      this.getListaPokemon(this._next);
  }

  public previous() {
    if (this._previous)
      this.getListaPokemon(this._previous);
  }
}
