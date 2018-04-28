import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/* Other imports */
import { HomeComponent } from '../pages/home/home.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { MyProfileComponent } from '../pages/my-profile/my-profile.component';

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
