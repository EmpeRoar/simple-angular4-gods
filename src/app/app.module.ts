import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GodsComponent } from './gods/gods.component';
import { GodItemComponent } from './god-item/god-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GodsComponent,
    GodItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
