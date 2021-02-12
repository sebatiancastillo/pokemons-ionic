import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonFormPageRoutingModule } from './pokemon-form-routing.module';

import { PokemonFormPage } from './pokemon-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonFormPageRoutingModule
  ],
  declarations: [PokemonFormPage]
})
export class PokemonFormPageModule {}
