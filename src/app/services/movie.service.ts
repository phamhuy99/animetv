import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(
    
    ) { }
  public arrMovie:any=[
  	"/assets/video/video1.mp4",
  	"/assets/video/video2.mp4",
  	"/assets/video/video3.mp4",
  	"/assets/video/video4.mp4",
  	"/assets/video/video5.mp4",
  	"/assets/video/video6.mp4",
  	"/assets/video/video7.mp4",
  ];
  getOnMovie(){
  	return this.arrMovie;
  }


}
