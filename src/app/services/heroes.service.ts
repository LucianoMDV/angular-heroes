import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Heroe[] = [];

  constructor(private http: HttpClient) {
    this.cargarHeroes();
  }

  cargarHeroes() {
    return this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe((respuesta: Heroe[]) => {
      this.heroes = respuesta;
      console.log(this.heroes);

    })
  }
}
