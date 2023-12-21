import { Component, Input , OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'hello.best',
  template: `
  <div>
    <h1>Hello {{name}}!</h1>
    <div mat-dialog-actions>
      <button mat-button color="primary">OK</button>
      <button mat-button [mat-dialog-close]>Cancel</button>
    </div>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  implements OnInit{
  @Input() name: string;

  constructor(public dialogRef: MatDialogRef<HelloComponent>){
  }

  ngOnInit(){

  }
}
