import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppPost } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';
import { HellowComponent } from './hellow/hellow.component';
import { ExampleComponent } from './example/example.component';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPost,
    Post2Component,
    Post3Component,
    HellowComponent,
    ExampleComponent,
    TrafficLightsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
