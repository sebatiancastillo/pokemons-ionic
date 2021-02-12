import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonHabitatPageRoutingModule } from './pokemon-habitat-routing.module';

import { PokemonHabitatPage } from './pokemon-habitat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonHabitatPageRoutingModule
  ],
  declarations: [PokemonHabitatPage]
})
export class PokemonHabitatPageModule {}
