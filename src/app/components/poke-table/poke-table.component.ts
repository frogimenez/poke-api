import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  public pokemonList:any[] = [];
  


  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    
    for (let i = 1; i <= 1; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          let pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            ability: res.abilities
          };
          console.log('RES',res);
          this.pokemonList.push(pokemonData);
          console.log(this.pokemonList);
        },
      );
    }
  }

}
