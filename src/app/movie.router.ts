import {Routes} from '@angular/router';
import { VideoComponent } from './component/video/video.component';
import { NavbarvideoComponent } from './navbarvideo/navbarvideo.component';
import { VideotovideoComponent } from './component/videotovideo/videotovideo.component';

/*============= movie ================== */
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

/*================*/
import { LoginComponent } from './component/login/login.component';

/*==================*/
import {LoginGuard} from './services/guard/login.guard';
/*===================*/

/*========ou1let 1==============================*/
import { Vdo1Component } from './compoent_outlet_1/vdo1/vdo1.component';
import { Vdo2Component } from './compoent_outlet_1/vdo2/vdo2.component';
import { Vdo3Component } from './compoent_outlet_1/vdo3/vdo3.component';

import { TestphpComponent } from './component/testphp/testphp.component';


export const app:Routes=[
      {
        path:'',
        redirectTo:'/xxxxxxxxxx',
        pathMatch:'full'
      },

      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'home',
        /*canActivate:[LoginGuard],*/
        component: VideoComponent

      },
      {
        path:'gogoV',
        component:VideotovideoComponent
      },
      {
        path:'vdo1',
        component:Vdo1Component,
        children:[
            {
              path:'vdo2',
              outlet:'outlet1',
              component: Vdo2Component
            },
            {
              path:'vdo3',
              outlet:'outlet2',
              component: Vdo3Component
            }
        ]
      },
      /*===============*/
      {
        path:'testphp',
        component:TestphpComponent
      },
      /*============= list phim */
      {
        path:'trailer1',
        component: Trailer1Component
      },
      {
        path:'trailer2',
        component: M2Component
      },
      {
        path:'trailer3',
        component: M3Component
      },
      {
        path:'trailer4',
        component: M4Component
      },
      {
        path:'trailer5',
        component: M5Component
      },
      {
        path:'trailer6',
        component: M6Component
      },
      {
        path:'trailer7',
        component: M7Component
      },
      {
        path:'trailer8',
        component: M8Component
      },
      {
        path:'trailer9',
        component: M9Component
      },
      {
        path:'trailer10',
        component: M10Component
      },
      {
        path:'trailer11',
        component: M11Component
      },
      {
        path:'trailer12',
        component: M12Component
      },
      /*==================*/
     
      /*================*/
      {
        path:'**',
        component: LoginComponent
      }

];
