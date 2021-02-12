import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonHabitatPage } from './pokemon-habitat.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonHabitatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonHabitatPageRoutingModule {}
