import { Component } from '@angular/core';


export class Phone{
    constructor(public title: string, 
                public price: number, 
                public company: string)
    { }
}


@Component({
  selector: 'app-exapmle',
  templateUrl: './exapmle.component.html',
  styleUrls: ['./exapmle.component.css']
})
export class ExapmleComponent {

  title: string = "";
	price: number = 0;
	company: string = "Apple";
	 
	phones: Phone[] = [];
	companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
	 
	addPhone(){
	    this.phones.push(new Phone(this.title, this.price, this.company));
	}

}
