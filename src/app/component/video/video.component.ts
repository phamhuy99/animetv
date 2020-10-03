import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
  	public router:Router
  	) { }

  ngOnInit(): void {
  }
 /* onclick(url:string){
  	this.router.navigate([url]); viết cách 2 thay cho routerlink
  }*/
  onlick(url:string){
    this.router.navigate([url]);
  }
}
