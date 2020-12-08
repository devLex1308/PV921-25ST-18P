import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-first-servise',
  templateUrl: './first-servise.component.html',
  styleUrls: ['./first-servise.component.css'],
  providers: [DataService]
})
export class FirstServiseComponent implements OnInit {

  items: string[] = [];
  name: string;
  constructor(private dataService: DataService){}
    
  addItem(name: string){
  	let newName = name;
  	if (newName && newName.trim())
    	this.dataService.addData(newName);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }

}
