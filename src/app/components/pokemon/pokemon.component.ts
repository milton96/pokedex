import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon | undefined;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {    
    this.getPokemon();
  }

  private getPokemon(): void {
    this.route.params.subscribe(params => {
      const name = params['name'];
      if (!name) return;
      this.pokemonService.getPokemon(name).subscribe(poke => this.pokemon = poke);
    });
  }

}
