import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubRedditsComponent } from './sub-reddits/sub-reddits.component';
import { routing } from './app.routing';
import { CategoryDetailComponent } from './category-detail/category-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SubRedditsComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
