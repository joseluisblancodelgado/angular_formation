import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSel:any;

  constructor(public _yts:YoutubeService) { 
    this._yts.getVideos().subscribe( videos => this.videos = videos);
  }

  ngOnInit() {
  }

  cargarMas(){
    this._yts.getVideos().subscribe( videos => this.videos.push(...videos));
  }

  verVideo(video:any){
    this.videoSel = video;
    $('#myModal').modal();
  }

  cerrarModal(){
    this.videoSel=null;
    $('#myModal').modal('hide');
  }

}
