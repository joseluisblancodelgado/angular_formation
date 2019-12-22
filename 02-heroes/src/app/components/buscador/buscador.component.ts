import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private _heroesService: HeroesService, private activatedRoute:ActivatedRoute, private router:Router) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['texto'];
      // console.log(params['texto']);
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
      //console.log(this.heroes);
    });
  }

  verHeroe(id: number) {
    // console.log("Id de Heroe" + id);
    this.router.navigate(['heroes/heroe', id]);
  }

}
