import { Component, OnInit } from '@angular/core';
/*goi service lay du lieu*/
import {MovieService} from './../../services/movie.service';
@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.css']
})
export class M2Component implements OnInit {
	public videoArr:any=[];
	public go1:string="assets/video/video1.mp4";

  constructor(
    private _movieService:MovieService
    ) { }


  ngOnInit(): void {
  }
  video(value:number){
    this.videoArr=this._movieService.getOnMovie()
  	switch(value) {
  case 1:
    	this.go1=this.videoArr[0];
    	console.log(this.go1);
    break;
  case 2:
    	this.go1=this.videoArr[1];
    	console.log(this.go1);
    break;
   case 3:
    	this.go1=this.videoArr[2];
    	console.log(this.go1);
    break;
    case 4:
    	this.go1=this.videoArr[3];
    	console.log(this.go1);
    break;
    case 5:
    	this.go1=this.videoArr[4];
    	console.log(this.go1);
    break;
    case 6:
    	this.go1=this.videoArr[5];
    	console.log(this.go1);
    break;
    case 7:
      this.go1=this.videoArr[6];
      console.log(this.go1);
    break;
  default:
  		this.go1=this.videoArr[0];
    // code block
	}
}

}
