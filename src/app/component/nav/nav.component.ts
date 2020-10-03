import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	logo1:string="assets/image/logo1.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
