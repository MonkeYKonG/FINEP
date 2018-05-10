import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { ComponentsModule } from '../../components/components.module';

import { ProfileComponent } from './profile.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ContratDescriptionComponent } from './components/contrat-description/contrat-description.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [
    ProfileComponent,
    LeftMenuComponent,
    ProfileDescriptionComponent,
    ContratDescriptionComponent
  ]
})
export class ProfileModule { }
