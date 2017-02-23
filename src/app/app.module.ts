import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ClickMeComponent} from './click-me.component'

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule
                ],
  declarations: [ AppComponent,
                  ClickMeComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
