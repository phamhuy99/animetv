import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public error:number=0;

  constructor(
  	private router:Router
  	) { }

  ngOnInit(): void {

  }
  onlick(name:string,pass:string){
  	let user={
  		name:name,
  		pass:pass
  	}
  	if(name=='admin' && pass=='12345'||name=='xxxxx' && pass=='11111'||name=='a' && pass=='a'){
  		localStorage.setItem('user',JSON.stringify(user)); //key va bien trung gian kiem tra
  		this.router.navigate(['/home']);
  	}else if(name=='' && pass==''){
  		this.error=0;
      alert('ban chua nhap mat khau');
  	}else{
      this.error=-1;
      alert('mat khau hoac user khong dung');
    }
  }

}
