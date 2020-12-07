import { Component, 
         Input, 
         OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit {
	
	@Input() name: string;
  count:number=1;
   
  ngOnInit() {
     
    this.log(`ngOnInit`);
  }
  ngOnChanges() {
     
    this.log(`OnChanges`);
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

  private log(msg: string) {
      console.log(this.count + ". " + msg);
      this.count++;
  }
}
