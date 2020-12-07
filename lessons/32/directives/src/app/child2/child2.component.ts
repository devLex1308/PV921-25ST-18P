import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  constructor() { }

  counter: number = 0;
  increment() { this.counter++; }
  decrement() { this.counter--; }

}
