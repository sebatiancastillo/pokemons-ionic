import { Component, OnInit, ViewChild } from '@angular/core';
import {PokemonDetalleService} from './../../services/pokemon/pokemon-detalle.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.page.html',
  styleUrls: ['./pokemon-detalle.page.scss'],
})
export class PokemonDetallePage implements OnInit {

  details: any;

  slideOpts = {//Parametro que permite mover las imagenes
    autoplay: {//Le indico que me corra las imagenes automaticamente
      delay: 1000,
      disableOnInteraction: false
    }
  };

  constructor(private pokemonDetalleService: PokemonDetalleService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokemonDetalleService.getPokeDetails(index).subscribe(details => {
      this.details = details;
      console.log('this.details');
      console.log(this.details);
    });
  }

}
