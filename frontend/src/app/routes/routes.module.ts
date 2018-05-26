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
import {FavoritesComponent} from '../pages/favorites/favorites.component';
import {MyDiscussionsComponent} from '../pages/my-discussions/my-discussions.component';
import {MyDocumentsComponent} from '../pages/my-documents/my-documents.component';
import {OnGoingContractsComponent} from '../pages/on-going-contracts/on-going-contracts.component';
import {ContactComponent} from '../pages/contact/contact.component';
import {WhoWeAreComponent} from '../pages/who-we-are/who-we-are.component';

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
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'my-discussions',
        component: MyDiscussionsComponent
      },
      {
        path: 'my-documents',
        component: MyDocumentsComponent
      },
      {
        path: 'on-going_contracts',
        component: OnGoingContractsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'who-we-are',
        component: WhoWeAreComponent
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
