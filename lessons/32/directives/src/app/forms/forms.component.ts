import { Component } from '@angular/core';
import { PhoneComponent } from '../phone/phone.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

   title: string;
   price: number;
   company: string;
     
   phones: PhoneComponent[] = [];
   companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
     
   addPhone(){
     this.phones.push(new PhoneComponent(this.title, this.price, this.company));
   }

}
