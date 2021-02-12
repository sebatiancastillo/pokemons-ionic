import { Injectable } from '@angular/core';
import { Global } from './../../global';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators' //Importo map de RxJS que es una librería de programación reactiva cuyo fin es simplificar la composición de código


@Injectable({
  providedIn: 'root'
})
export class PokemonDetalleService {
  public url: string;
  public urlImg: string;

  constructor(public http: HttpClient) {
    this.url = Global.urlPokemon;
    this.urlImg = Global.urlImg;
   }

   getPokeDetails(index) {
    return this.http.get(`${this.url}/${index}`).pipe(
      map(poke => {
        let sprites = Object.keys(poke['sprites']);
        poke['images'] = sprites
          .map(spriteKey => poke['sprites'][spriteKey])
          .filter(img => img);
        // console.log('poke');
        // console.log(poke);
        return poke;
      })
    );
  }
}
