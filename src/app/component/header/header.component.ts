import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	logo1:string="https://phunugioi.com/wp-content/uploads/2020/02/hinh-anh-anime-chibi.jpg";
	slide1:string=`https://i.ytimg.com/vi/cebtdnrP69s/maxresdefault.jpg`;
	slide2:string=`https://vnreview.vn/image/20/44/90/2044906.jpg`;
	slide3:string=`https://i.imgur.com/LSKV0UA.jpg`;

  constructor() { }

  ngOnInit(): void {
  }

}
