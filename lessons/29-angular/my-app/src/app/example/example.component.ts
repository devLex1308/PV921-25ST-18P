import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  constructor() { }
  colspan=2;

  changeColspan(val) {
  	this.colspan = val;
  }
}
