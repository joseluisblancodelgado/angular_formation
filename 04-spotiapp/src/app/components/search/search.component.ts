import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];
  public loading:boolean;

  constructor(private spotify: SpotifyService) { 
    
  }

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

}
