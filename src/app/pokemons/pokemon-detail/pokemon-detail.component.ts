import { Component, OnInit } from '@angular/core';
import {PokemonDetail} from '../pokemonDetail.model';
import {PokemonService} from '../pokemon.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetail;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private location : Location) { }

  ngOnInit() {
    this.getPokemonById();
  }

  getPokemonById(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(id).subscribe((myResult:any) => this.pokemon = myResult);
  }

  goback(){
    this.location.back();
  }

}
