import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }
  color = true;
  ngOnInit(): void {
  }

  changeColor() {
  	console.log(8);
  	this.color = !this.color;
  }


}


