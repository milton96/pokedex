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
  public pokemonTemp: Pokemon[] = [];  

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getListaPokemon();
  }

  /**
   * getListaPokemon
   */
  public getListaPokemon(): void {
    // this.pokemonService.getListaPokemon().subscribe((response) => {
    //   this.pokemon = response['results'] as Pokemon[];
    // });
    // this.pokemonService.getListaPokemon().pipe(
    //   mergeMap((res) => res.results),
    //   map((p) => {
    //     this.pokemonService.getPokemon(p['name']).subscribe(poke => this.pokemon.push(poke))
    //   })
    // ).subscribe((data) => {
    //   // this.pokemonService.getPokemon(data['name']).subscribe(p => {
    //   //   this.pokemon.push(p);
    //   // });
    //   this.pokemon.sort((a,b) => a.order - b.order);
    // });
    this.pokemonService.getListaPokemon().subscribe(response => {
      const arr: Observable<Pokemon>[] = [];
      response.results.forEach(r => {
        arr.push(this.pokemonService.getPokemon(r["name"]));
      });
      forkJoin(arr).subscribe(pokemon => {
        this.pokemon = pokemon;
      });
    });
  }
}
