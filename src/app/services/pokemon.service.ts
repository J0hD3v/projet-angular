import { query } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async loadPokemons(): Promise<any> {
    
    const url = 'https://tyradex.vercel.app/api/v1/gen/1';
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return data;
  }
}
