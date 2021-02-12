import { Component, OnInit, ViewChild } from '@angular/core';
import {PokemonDetalleService} from './../../services/pokemon/pokemon-detalle.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.page.html',
  styleUrls: ['./pokemon-detalle.page.scss'],
})
export class PokemonDetallePage implements OnInit {

  detallePokemon: any;

  slideOpts = {//Parametro que permite mover las imagenes
    autoplay: {//Le indico que me corra las imagenes automaticamente
      delay: 4000,
      disableOnInteraction: false
    }
  };

  constructor(private pokemonDetalleService: PokemonDetalleService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokemonDetalleService.getDetallePokemon(index).subscribe(detallePokemon => {
      this.detallePokemon = detallePokemon;
      console.log('this.detallePokemon');
      console.log(this.detallePokemon);
    });
  }

}
