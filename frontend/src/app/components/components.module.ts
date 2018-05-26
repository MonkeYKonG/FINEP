import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { RetractablePanelComponent } from './retractable-panel/retractable-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PopUpComponent,
    RetractablePanelComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    PopUpComponent,
    RetractablePanelComponent
  ]
})
export class ComponentsModule { }
