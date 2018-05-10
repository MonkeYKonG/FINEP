import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { RoutesModule } from '../routes/routes.module';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { ContactComponent } from './contact/contact.component';
import { LegalsInformationsComponent } from './legals-informations/legals-informations.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { InformationsComponent } from './informations/informations.component';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutesModule,
    ComponentsModule,
    ProfileModule
  ],
  exports: [
    RoutesModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent,
    MyProfileComponent,
    ContactComponent,
    LegalsInformationsComponent,
    WhoWeAreComponent,
    InformationsComponent
  ]
})
export class PagesModule { }
