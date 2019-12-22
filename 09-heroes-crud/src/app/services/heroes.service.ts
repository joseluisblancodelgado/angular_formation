import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl:string = 'https://heroes-crud-a8e3c.firebaseio.com/heroes.json';
  heroeUrl:string = 'https://heroes-crud-a8e3c.firebaseio.com/heroes/';

  constructor(private http:HttpClient) { }

  nuevoHeroe(heroe:Heroe){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let body = JSON.stringify(heroe);

    return this.http.post(this.heroesUrl, body, {headers})
    .pipe(
          map( (res:any)=>{
            console.log(res);
            return res;
          })
        );

  }

  actualizarHeroe(heroe:Heroe,key$:string){

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${this.heroeUrl}/${key$}.json`;

    let body = JSON.stringify(heroe);

    return this.http.put(url, body, {headers})
    .pipe(
          map( (res:any)=>{
            console.log(res);
            return res;
          })
        );

  }

  getHeroe(key$:string){

    let url = `${this.heroeUrl}/${key$}.json`;

    return this.http.get(url)
    .pipe(
          map( (res:any)=>{
            console.log(res);
            return res;
          })
        );
  }

  getHeroes(){

    return this.http.get(this.heroesUrl)
    .pipe(
          map( (res:any)=>{
            console.log(res);
            return res;
          })
        );
  }

  borrarHeroe(key$:string){
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete(url)
    .pipe(
          map( (res:any)=>{
            console.log(res);
            return res;
          })
        );
  }
}
