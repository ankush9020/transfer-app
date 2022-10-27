import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularIbanModule } from 'angular-iban';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserModalPage } from './user-modal/user-modal.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent , UserModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularIbanModule, FormsModule,
    ReactiveFormsModule,IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularIbanModule,
    ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
