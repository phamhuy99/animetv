import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbarvideo',
  templateUrl: './navbarvideo.component.html',
  styleUrls: ['./navbarvideo.component.css']
})
export class NavbarvideoComponent implements OnInit {
  public name:string;
  constructor(
  	private router:Router
  	) { }

  ngOnInit(): void {
  }
  logout(){
  	if (localStorage.getItem('user')) {
  		localStorage.removeItem('user');
      return this.router.navigate(['/zzzzz']);
  	}
  }
   onserch(){
    var avb=this.router.navigate(['/vdo1'],{queryParams:{name:this.name ? this.name :''}});
    console.log(avb);
        
  }

}
