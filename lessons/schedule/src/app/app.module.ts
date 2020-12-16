import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ExapmleComponent } from './exapmle/exapmle.component';
import { HttpComponent } from './http/http.component';
import { CurrencyConversionComponent } from './currency-conversion/currency-conversion.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { HttpPostComponent } from './http-post/http-post.component';
import { StationComponent } from './station/station.component';


@NgModule({
  declarations: [
    AppComponent,
    // ExapmleComponent,
    HttpComponent,
    CurrencyConversionComponent,
    ExchangeRatesComponent,
    HttpServiceComponent,
    HttpPostComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
