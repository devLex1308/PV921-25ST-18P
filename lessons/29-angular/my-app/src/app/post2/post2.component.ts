import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component {

	toggle = false;
	title = "Мій компонент";

	name = "1";

	arr = [1,2,3,8,7,9]
	obj = {a:1, b:2, c:{d:5}}

	firstName = "Valera"
	lastName = ""
	show = false

  constructor() {
  	let i = 0;
  	// setInterval(() => {
  	// 	i++;
  	// 	this.title = `Тест ${i}`;
  	// }, 1000);

  }

  changeListener = (event) => {
  	console.log("changeListener", event.target.value);
  	this.name = event.target.value;
  }

  changeListenerKey = (event) => {
  	console.log("changeListenerKey", event.target.value);
  	this.name = event.target.value;
  }

  clickListener = () => {
  	console.log(this.firstName, this.lastName);
  	this.show = !this.show;
  }

  // onInput(event: any) {
  //   this.lastName = event.target.value
  // }

  // changeFirstName(event) {
  // 	this.firstName = event.target.value;
  // }

  // changeLastName(event) {
  // 	this.lastName = event.target.value;
  // } 
}
