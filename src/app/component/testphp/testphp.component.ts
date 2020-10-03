import { Component, OnInit } from '@angular/core';
import "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/messaging";
import "firebase/storage";
import "firebase/performance";
import "firebase/database";
import "firebase/remote-config";


@Component({
  selector: 'app-testphp',
  templateUrl: './testphp.component.html',
  styleUrls: ['./testphp.component.css']
})
export class TestphpComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
