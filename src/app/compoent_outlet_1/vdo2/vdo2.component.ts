import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';
import {ListmovieService} from './../../services/listmovie.service';
import {Router} from '@angular/router';
import {movies} from './../../model/movie.class';
import {Subscription,Observable} from 'rxjs';

/*[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}*/ /*du lieu email*/
@Component({
  selector: 'app-vdo2',
  templateUrl: './vdo2.component.html',
  styleUrls: ['./vdo2.component.css']
})
export class Vdo2Component implements OnInit,OnChanges,OnDestroy {
  public todo:movies[]=[];
  public parramSUB:Subscription;

  constructor(
  	private router:Router,
  	private listmovieService:ListmovieService
  	) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
  }
  ngOnDestroy(){
    if (this.parramSUB) {
      this.parramSUB.unsubscribe;
    }
  }
  /*==================================*/
  addMovie(name:string,link:string,price?:number){
    let todo = new movies(name,link,price);
  	this.parramSUB =this.listmovieService.AddToMovie(todo).subscribe(data=>{
      console.log('data:',data);
      alert('ban vua addmovie:'+'name--'+name+'link--'+link);
    },error =>{
        this.listmovieService.handoError(error);
        console.log(error);
      });
  }
  /*===================================*/
  editmovie(id:number,name:string,link:string,price?:number){
    let edit= new movies(name,link,price,id);

    this.parramSUB=this.listmovieService.EditTodo(edit).subscribe(data=>{
      console.log('data:',data);
    });
    alert('ban vua moi edit lai movie!!'+'id--'+id+'name--'+name+'link--'+link);
  }
  /*====================================*/
  deleteMovie(id:number){
    this.parramSUB=this.listmovieService.DeleteTodo(id).subscribe(data=>{
      console.log('data:',data);
    })
    alert('ban vua delete movie id:--'+id);
  }


}
