import { Component, OnInit ,OnDestroy,Input } from '@angular/core';
import {ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router,RouterModule} from '@angular/router';
import {ListmovieService} from './../../services/listmovie.service';
import {movies} from './../../model/movie.class';
import {Subscription,Observable} from 'rxjs';

@Component({
  selector: 'app-vdo1',
  templateUrl: './vdo1.component.html',
  styleUrls: ['./vdo1.component.css']
})
export class Vdo1Component implements OnInit,OnDestroy {
  public newMovie:any=[1,2,3,4,5,6,7,8];

	public name:string;//var tiem kiem
  public arr2:any=[];
	public paramSubcription:Subscription;

  constructor(
  	private router:Router,
  	private listmovieService:ListmovieService,
  	private activatedRoute:ActivatedRoute,

  	) { }


  ngOnInit(): void {
  	
  	this.paramSubcription=this.activatedRoute.queryParams.subscribe(data =>{
  		let name=data['name'];
  		this.arr2=this.listmovieService.getOnMovie(name); 
  	});
    /*=============================*/
    this.onload();
    }
    onload(){
      this.paramSubcription=this.listmovieService.Getontodo().subscribe(x =>{
        //console.log(x);
        this.arr2=x;
      },error =>{
        this.listmovieService.handoError(error);
        console.log(error);
        let err= document.getElementById('txtEROR');
        err.innerHTML=`<h1>ERROR -- 404</h1>`;
        err.style.color='#f00';
        err.style.textAlign='center';
        err.style.marginTop='170px';
        console.log('err',err);

      });
    }
  
  ngOnDestroy(){
  	if (this.paramSubcription) {
  		this.paramSubcription.unsubscribe();
  	}
  }
  onserch(){
  	var avb=this.router.navigate(['/vdo1'],{queryParams:{name:this.name ? this.name :''}});
  	console.log(avb);
    alert('ban tim kiem:'+this.name);	
  }

}
