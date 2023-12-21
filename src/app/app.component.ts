import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {HelloComponent} from './hello.component';
import { RaisedButtonsComponent } from './raised-buttons.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private dialog:MatDialog){

  }

  openDialog(){
    this.dialog.open(HelloComponent,{height:'100px',width:'100px'});
  }

  openRaisedButtonDialog(){
    this.dialog.open(RaisedButtonsComponent,{height:'100px',width:'100px'});
  }
}

