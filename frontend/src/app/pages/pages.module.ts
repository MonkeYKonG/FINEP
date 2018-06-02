import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { RoutesModule } from '../routes/routes.module';
import { ComponentsModule } from '../components/components.module';
import { DialogModule } from '../dialog/dialog.module';

import { HomeComponent } from './home/home.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { ContactComponent } from './contact/contact.component';
import { LegalsInformationsComponent } from './legals-informations/legals-informations.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { InformationsComponent } from './informations/informations.component';
import { ProfileModule } from './profile/profile.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyDiscussionsComponent } from './my-discussions/my-discussions.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import { OnGoingContractsComponent } from './on-going-contracts/on-going-contracts.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutesModule,
    ComponentsModule,
    ProfileModule,
    DialogModule
  ],
  exports: [
    RoutesModule,
    ComponentsModule,
    DialogModule
  ],
  declarations: [
    HomeComponent,
    MyProfileComponent,
    ContactComponent,
    LegalsInformationsComponent,
    WhoWeAreComponent,
    InformationsComponent,
    FavoritesComponent,
    MyDiscussionsComponent,
    MyDocumentsComponent,
    OnGoingContractsComponent
  ]
})
export class PagesModule { }
