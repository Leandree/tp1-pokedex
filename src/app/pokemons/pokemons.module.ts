import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ]
})
export class PokemonsModule { }
