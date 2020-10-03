import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
/*========================= router =================================*/
import {RouterModule,Routes} from '@angular/router';
import {app} from './movie.router';
/*=====================================================================*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { VideoComponent } from './component/video/video.component'; /*home||index*/
import { TitleComponent } from './component/title/title.component';
import { FootterComponent } from './component/footter/footter.component';
import { NavbarvideoComponent } from './navbarvideo/navbarvideo.component';
import { VideotovideoComponent } from './component/videotovideo/videotovideo.component';
/*========= componentmovie ============================*/
import { Trailer1Component } from './component_movie/trailer1/trailer1.component';
import { M2Component } from './component_movie/m2/m2.component';
import { M3Component } from './component_movie/m3/m3.component';
import { M4Component } from './component_movie/m4/m4.component';
import { M5Component } from './component_movie/m5/m5.component';
import { M6Component } from './component_movie/m6/m6.component';
import { M7Component } from './component_movie/m7/m7.component';
import { M8Component } from './component_movie/m8/m8.component';
import { M9Component } from './component_movie/m9/m9.component';
import { M10Component } from './component_movie/m10/m10.component';
import { M11Component } from './component_movie/m11/m11.component';
import { M12Component } from './component_movie/m12/m12.component';
/*====================== service ====================*/
import {MovieService} from './services/movie.service';
import {ListmovieService} from './services/listmovie.service';
import {LoginGuard} from './services/guard/login.guard';
/*===========================*/
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import {movies} from './model/movie.class';
/*===============================*/
import { LoginComponent } from './component/login/login.component';
import { Vdo1Component } from './compoent_outlet_1/vdo1/vdo1.component';
import { Vdo2Component } from './compoent_outlet_1/vdo2/vdo2.component';
import { Vdo3Component } from './compoent_outlet_1/vdo3/vdo3.component';
/*======================================*/

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

/*========================================*/
import { TestphpComponent } from './component/testphp/testphp.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    VideoComponent,
    TitleComponent,
    FootterComponent,
    NavbarvideoComponent,
    VideotovideoComponent,
    Trailer1Component,
    M2Component,
    M3Component,
    M4Component,
    M5Component,
    M6Component,
    M7Component,
    M8Component,
    M9Component,
    M10Component,
    M11Component,
    M12Component,
    LoginComponent,
    Vdo1Component,
    Vdo2Component,
    Vdo3Component,
    TestphpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(app)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
      MovieService,
      ListmovieService,
      LoginGuard
  ], /*khai bao service*/
  bootstrap: [AppComponent]
})
export class AppModule { }
