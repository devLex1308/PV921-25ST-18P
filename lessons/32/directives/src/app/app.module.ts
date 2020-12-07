import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { Child2Component } from './child2/child2.component';
import { NgClassComponent } from './ng-class/ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ViewChildComponent,
    Child2Component,
    NgClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
