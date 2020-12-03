import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-from-child-to-parent',
  templateUrl: './from-child-to-parent.component.html',
  styleUrls: ['./from-child-to-parent.component.css']
})
export class FromChildToParentComponent {

  constructor() { }
   @Output() myEvent = new EventEmitter<boolean>();
    change(increased:any) {
        this.myEvent.emit(increased);
    }

    @Output() myTextInput = new EventEmitter<boolean>();
    onChange(event) {
    	this.myTextInput.emit(event.target.value);
    }
}
