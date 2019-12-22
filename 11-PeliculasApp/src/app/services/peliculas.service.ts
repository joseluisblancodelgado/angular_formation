import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from'rxjs/operators';

@Injectable()
export class PeliculasService {

  private apikey:string = "9d6a90c2b95d4a700ee5cb9705c94b0f";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor( private _http: HttpClient ) { }

  getCartelera(){
    
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.gte=${hastaStr}&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map( (res: any) =>  res.results ));
  }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map( (res: any) =>  res.results ));
  }

  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map( (res: any) =>  res.results ));
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map( (res: any) => {
      this.peliculas = res.results;
      return res.results
    }));
  }

  getMovie(id: string) {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._http.jsonp(url, '').pipe(map( (res: any) =>  res ));
  }

}
