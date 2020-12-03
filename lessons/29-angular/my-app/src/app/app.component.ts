import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = "Тарас Шевченко";
  age = 47;
  clicks:number = 0;
  onChanged(increased) {
  	increased==true
  		?this.clicks++
  		:this.clicks--;
  }
}
