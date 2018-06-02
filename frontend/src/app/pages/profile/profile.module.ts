import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { ComponentsModule } from '../../components/components.module';
import { DialogModule } from '../../dialog/dialog.module';

import { ProfileComponent } from './profile.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ContratDescriptionComponent } from './components/contrat-description/contrat-description.component';
import { InvestmentService } from '../../services/investment.service';
import { UserInfoService } from '../../services/user-info.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    DialogModule
  ],
  declarations: [
    ProfileComponent,
    LeftMenuComponent,
    ProfileDescriptionComponent,
    ContratDescriptionComponent
  ],
  providers: [
    InvestmentService, UserInfoService
  ]
})
export class ProfileModule { }
