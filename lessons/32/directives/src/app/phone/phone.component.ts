import { Component } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent  {

  constructor(public title: string, 
                public price: number, 
                public company: string)
    { }

}
