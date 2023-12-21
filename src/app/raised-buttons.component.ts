import { Component, Input , OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'raised-buttons.best',
  template: `
  <div>
    <h1>Hello {{name}}!</h1>
    <div mat-dialog-actions>
      <button mat-raised-button color="primary">OK</button>
      <button mat-raised-button [mat-dialog-close]>Cancel</button>
    </div>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class RaisedButtonsComponent  implements OnInit{
  @Input() name: string;

  constructor(public dialogRef: MatDialogRef<RaisedButtonsComponent>){
  }

  ngOnInit(){

  }
}
