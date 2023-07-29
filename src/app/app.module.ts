import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountService } from './globals/services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './globals/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
