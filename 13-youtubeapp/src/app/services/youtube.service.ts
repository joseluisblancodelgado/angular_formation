import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeURL:string = "https://www.googleapis.com/youtube/v3";
  private apikey:string = "AIzaSyDF2cFdXvExynNrP6Qde-3q1QOFwmtDYgA";
  private playlist:string = "UUdSgT4-J2XSi658rUgG6nNg";
  private nextPageToken:string = ""; //CAoQAA

  constructor(private http: HttpClient) {

  }

  getVideos(){

    let url = `${this.youtubeURL}/playlistItems/`;
    let params = new HttpParams().set('part', 'snippet')
                          .set('maxResults', '10')
                          .set('playlistId', this.playlist )
                          .set('key', this.apikey );
    
    if(this.nextPageToken){
      params.set('pageToken', this.nextPageToken );
    }

    return this.http.get(url,{ params: params })
      .pipe( map((data: any) => {
        console.log(data);
        this.nextPageToken = data.nextPageToken;
       console.log(this.nextPageToken);
    
        let videos: any[] = [];
        for ( let video of data.items) {
          let snippet = video.snippet;
          videos.push(snippet);
        }
    
        return videos; 
      }) 
    );
  }
}
