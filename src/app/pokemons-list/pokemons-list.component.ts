import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemons-list',
  imports: [
    NgFor
  ],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent {

  // pokemons: Promise<any>[] = []
  pokemons: any[] = []
  isLoading: boolean = true
  errorMessage: string = ''

  constructor(private pokemonList: PokemonService) {}

  ngOnInit():void {

    this.pokemonList.loadPokemons().then((result) => {
      console.log(result);
      this.pokemons = result;
    })

  }

  loadPokemons(): void {
    // Ici ca exec ma methode this.pokemonService.fetchPokemonList() de mon service
  
  }
}
