import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nuevasCanciones: any[] = [];
  public loading:boolean;
  public error:boolean;
  public mensajeError:string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
  }

  ngOnInit() {
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    },error =>{
      console.log(error);
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    });
  }

}
