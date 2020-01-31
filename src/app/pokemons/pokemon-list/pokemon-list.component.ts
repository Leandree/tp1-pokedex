import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon.model';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  nbPokemon: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons(this.nbPokemon).subscribe((myResult:any) => this.pokemons = myResult.data);
  }

  onScroll(){
    this.nbPokemon += 20;
    this.pokemonService.getPokemons(this.nbPokemon).subscribe((myResult:any) => this.pokemons.push.apply(this.pokemons, myResult.data));
  }

}
