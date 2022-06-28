import { Component, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/interfaces/pokemon';

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getListaPokemon();
  }

  /**
   * getListaPokemon
   */
  public getListaPokemon(): void {
    this.pokemonService.getListaPokemon().subscribe((response) => {
      this.pokemon = response['results'] as Pokemon[];
    });
  }
}
