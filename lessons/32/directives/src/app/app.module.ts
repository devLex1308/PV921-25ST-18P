import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { Child2Component } from './child2/child2.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { BoldDirective } from './bold.directive';
import { ColorRedDirective } from './directives/color-red.directive';
import { FirstServiseComponent } from './first-servise/first-servise.component';

import { DataService } from './data.service';
import { LogService } from './log.service';
import { FormsComponent } from './forms/forms.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ViewChildComponent,
    Child2Component,
    NgClassComponent,
    BoldDirective,
    ColorRedDirective,
    FirstServiseComponent,
    FormsComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
