import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonPage } from './pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonPage
  },
  {
    path: 'pokemon-detalle',
    loadChildren: () => import('./pokemon-detalle/pokemon-detalle.module').then( m => m.PokemonDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonPageRoutingModule {}
