import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class AppPost {
	waterStatus: string;
  _waterTemperature: number;
      
   
    set waterTemperature(temperature:number) {
        this._waterTemperature = temperature;
        if(temperature<0)
            this.waterStatus="Лід";
        else if(temperature<100)
            this.waterStatus="Вода";
        else
            this.waterStatus="Газ";
  }
  get waterTemperature() { return this._waterTemperature; }
}
