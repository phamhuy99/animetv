import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {movies} from './../model/movie.class';


@Injectable({
  providedIn: 'root'
})
export class ListmovieService {
  public apilist:string="https://5f478fbb95646700168d986b.mockapi.io/api/products";
  public api:any=[];

	public listM:any=[];
  /*json-server --watch data.json*/
  /*json-server --host X.X.X.X data.json*/ 

  constructor(
    private http:HttpClient
    ) { }

  getlistM(){
  }
  getOnMovie(name:string){
  	let resl:any[]=this.api;
  	if (name) {
  		resl=this.api.filter(x =>{
  			return x.name.toLowerCase().indexOf(name.toLowerCase().trim()) != -1;
  		});
  		return resl;
  	}
  	return this.api;
  }
  
 /* addmovie(movie:any){
  	let idz=this.listM.length+1;
  	this.listM.length!==null ? this.listM['id']=idz++ : this.listM['id']=1;
    console.log('movie:',movie);
  	this.listM.push(movie);
  	console.log(this.listM);
  }
  deleteM(id:number){
  		id=id-1;
  	  	this.listM.splice(id,1);
 	console.log('id:',id);
  	console.log(this.listM);
  }*/
   Getontodo():Observable<movies[]>{
      console.log('list:',this.http.get<movies[]>(this.apilist).subscribe(
        xx =>{ console.log(xx);
          for (var i = 0; i < xx.length; i++) {
            this.api.push(xx[i])
          }
          return this.api;
        }
        ));
      console.log('api--:',this.api);
    return this.http.get<movies[]>(this.apilist);  
  }
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  handoError(err){
    if (err.error instanceof Error) {
      console.log(`client site error: ${err.error.message}`);
    }else{
      console.log(`server site ERROR: ${err.status}-${err.error}`);
    }
  }
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  AddToMovie(todo):Observable<movies[]>{
    return this.http.post<movies[]>(this.apilist,todo);
  }
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  EditTodo(edit:movies):Observable<movies[]>{
    return this.http.put<movies[]>(this.apilist+`/${edit.id}`,edit);
    console.log('linkedit:',`this.apilist/${edit.id}`);
  }
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  DeleteTodo(id:number):Observable<movies[]>{
    return this.http.delete<movies[]>(this.apilist+`/${id}`);
  }

}
