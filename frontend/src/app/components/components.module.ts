import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { RetractablePanelComponent } from './retractable-panel/retractable-panel.component';
import { RoutesModule } from '../routes/routes.module';

@NgModule({
  imports: [
    CommonModule,
    RoutesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopUpComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopUpComponent
  ]
})
export class ComponentsModule { }
