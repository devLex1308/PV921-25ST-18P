import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component {

	title = "Мій компонент"

	name = "1"

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
  	console.log("Натиск");
  }
}
