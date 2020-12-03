import { Component } from '@angular/core';

@Component({
  selector: 'app-hellow',
  template: `<h1>Hello Angular 11</h1>
            <p>Angular 11 представляет модульную архитектуру приложения</p>`,
	styles: [` 
	        h1, h2{color:navy;}
	        p{font-size:13px; font-family:Verdana;}
	`]
})
export class HellowComponent  {

  constructor() { }
}
