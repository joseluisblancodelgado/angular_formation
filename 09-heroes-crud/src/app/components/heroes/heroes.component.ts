import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService) {
    this._heroesService.getHeroes().subscribe(data=>{
      /* for(let key$ in data){
        this.heroes.push(data[key$]);
      } */
      this.heroes = data;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$).subscribe(respuesta=>{
      if(respuesta){
        console.error(respuesta);
      }else{
        delete this.heroes[key$];
      }
    });
  }

}
