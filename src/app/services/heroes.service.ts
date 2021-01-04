import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarHeroes();
  }

  cargarHeroes() {
    return this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe((respuesta: any[]) => {
      this.heroes = respuesta;
      console.log(this.heroes);

    })
  }
}
