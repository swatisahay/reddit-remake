import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubRedditsComponent } from './sub-reddits/sub-reddits.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SubRedditsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
