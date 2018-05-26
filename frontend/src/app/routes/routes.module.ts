import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/* Other imports */
import { HomeComponent } from '../pages/home/home.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { MyProfileComponent } from '../pages/my-profile/my-profile.component';
import {InformationsComponent} from '../pages/informations/informations.component';
import {LegalsInformationsComponent} from '../pages/legals-informations/legals-informations.component';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent
      },
      {
        path: 'legals-informations',
        component: LegalsInformationsComponent
      },
      {
        path: 'informations',
        component: InformationsComponent
      }
    ]),
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class RoutesModule { }
