import { IonicModule } from '@ionic/angular';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AngularIbanModule } from 'angular-iban';
import { MycurrencyPipe } from './currency.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AngularIbanModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CurrencyPipe,
    IonicModule.forRoot({
      mode: 'md'
    })
  ],
  
  exports: [
    MycurrencyPipe
  ],

  declarations: [Tab1Page, MycurrencyPipe]
})
export class Tab1PageModule { }
