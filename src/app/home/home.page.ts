import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  irPokemones(){
    console.log('Ir a irPokemones');
    this.router.navigate(['/pokemon']);
  }

  irHabitatPokemon(){
    console.log('Ir a irHabitatPokemon');
    this.router.navigate(['/pokemon-habitat']);
  }

  irFormasPokemon(){
    console.log('Ir a irHabitatPokemon');
    this.router.navigate(['/pokemon-form']);
  }

}
