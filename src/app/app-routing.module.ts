import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    children: [
      {
        path: '',
        loadChildren: () => import('./pokemon/pokemon.module').then( m => m.PokemonPageModule)
      },
      {
        path: 'pokemon-detail/:index',
        loadChildren: () => import('./pokemon/pokemon-detalle/pokemon-detalle.module').then( m => m.PokemonDetallePageModule)
      }
    ]
  },
  {
    path: 'pokemon-habitat',
    loadChildren: () => import('./pokemon-habitat/pokemon-habitat.module').then( m => m.PokemonHabitatPageModule)
  },
  {
    path: 'pokemon-form',
    loadChildren: () => import('./pokemon-form/pokemon-form.module').then( m => m.PokemonFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
