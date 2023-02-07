import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  public pokemonList = [];


  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe(pokemon =>  {
      
      console.log("🚀 ~ file: poke-table.component.ts:23 ~ PokeTableComponent ~ this.pokemonService.getAllPokemons ~ pokemon", pokemon)
      this.pokemonList = pokemon.results
      console.log("🚀 ~ file: poke-table.component.ts:23 ~ PokeTableComponent ~ this.pokemonService.getAllPokemons ~ pokemonList", this.pokemonList)
    })
    this.pokemonService.getPokemons(10).subscribe(pokemon =>  console.log(pokemon.species.name));
  }

}
