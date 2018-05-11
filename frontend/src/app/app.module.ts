import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesModule } from './routes/routes.module';

import { ApiService } from './services/api.service';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { RetractablePanelComponent } from './components/retractable-panel/retractable-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalsInformationsComponent } from './pages/legals-informations/legals-informations.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MyProfileComponent,
    RetractablePanelComponent,
    HeaderComponent,
    FooterComponent,
    PopUpComponent,
    InformationsComponent,
    ContactComponent,
    LegalsInformationsComponent,
    WhoWeAreComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RoutesModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
