import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';

import { ApiService } from './services/api.service';
import { UserInfoService } from './services/user-info.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PagesModule
  ],
  providers: [ApiService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
