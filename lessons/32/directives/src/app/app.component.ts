import { Component, 
	OnChanges,
	SimpleChanges,
  Input, 
  OnInit,
  DoCheck,
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit
 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit {
  name:string="Tom";
	age:number = 25;
	ngOnChanges(changes: SimpleChanges) {
	  for (let propName in changes) {
	    let chng = changes[propName];
	    let cur  = JSON.stringify(chng.currentValue);
	    let prev = JSON.stringify(chng.previousValue);
	    this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
	  }
	}

	count:number=1;
  ngOnInit() {
     
    this.log(`ngOnInit`);
  }

  ngDoCheck() {
     
    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
     
    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
     
    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
     
    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
     
    this.log(`ngAfterContentChecked`);
  }
  // counter2 = 8;
  private log(msg: string) {
      console.log("father", this.count + ". " + msg, this.counter);
      this.count++;
  }
}
