import { Component } from '@angular/core';

@Component({
  selector: 'app-post3',
  template: `
  	<p class="myP">Компонент в одному файлі</p>
  `,
  styles: [`
  .myP {
  	color: red,
  }
  `]
})
export class Post3Component {

  constructor() { }

}
