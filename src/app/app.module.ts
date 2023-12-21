import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RaisedButtonsComponent } from './raised-buttons.component';


@NgModule({
  imports:      [ BrowserModule, 
  FormsModule ,
  NoopAnimationsModule,
  MatDialogModule,
  MatButtonModule],
  declarations: [ AppComponent, HelloComponent, RaisedButtonsComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [HelloComponent, RaisedButtonsComponent]
})
export class AppModule { }
