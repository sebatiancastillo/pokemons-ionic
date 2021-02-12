import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

import { Global } from './../../global';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public url: string;
  public urlImg: string;


  constructor(public http: HttpClient) {
    this.url = Global.urlPokemon;
    this.urlImg = Global.urlImg;
  }

  getPokemon(offset = 0){ //creo la funcion de obtener datos, el ofsset es un parametro de inicio
    return this.http.get(`${this.url}/?ofsset=${offset}&limit=25`).pipe( //Le digo que me obtenga la url y despues de la url agregar parametros de consulta, con /pokemon presenta una lista general hasta 25 y el pipe es como un bloqueo
      map(result=>{ //Mapeo el resultado para no obtener todo solo datos especificos como nombre, en este caso result tiene los datos del arreglo.
        console.log(result);
        return result['results'];
      }),

      map(pokemons=>{ // Mapeo para obtener las imagenes desde el index donde se alojan los datos de cada pokemon
        return pokemons.map((poke, index) => { //Para cada pokemon en ese resultado lo vulvo a mapear y tambien uso el index como un bucle completo en cada uno de los elementos y asi presente correctamente el nombre y la imagen que es
          poke.image = this.getPokeImage(index + offset + 1);//Aqui le digo que me obtenga la imagen y le agrego el index(nombre, id) de ese pokemon, pero que le sume uno ya que las imagenes empiezan desde 1 y no desde 0 (ofsset +1)
          poke.pokeIndex = offset + index + 1;
          return poke;//Finalmente me retorna la imagen
        });
      })
    ) 
  }

  getPokeImage(index){
    return `${this.urlImg}${index}.png`; //Me obtiene las imagenes de la url y las almacena en el index
  }

  findPokemon(search){ //Funcion para buscar pokemon
    return this.http.get(`${this.url}/${search}`).pipe(
      map(pokemon =>{
       pokemon['image']=this.getPokeImage(pokemon['id']);
       pokemon['pokeIndex']=pokemon['id'];
       return pokemon;
      })
    );
  }
}
