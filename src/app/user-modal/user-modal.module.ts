import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserModalPageRoutingModule } from './user-modal-routing.module';

import { UserModalPage } from './user-modal.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    UserModalPageRoutingModule
  ],
  declarations: [UserModalPage]
})
export class UserModalPageModule {}
