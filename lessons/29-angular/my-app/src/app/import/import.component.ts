import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent  {

  constructor() { }
  @Input() userName: string;
  @Input() userAge: number;

}
