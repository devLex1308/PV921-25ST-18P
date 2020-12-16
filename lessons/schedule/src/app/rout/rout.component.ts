import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rout',
  templateUrl: './rout.component.html',
  styleUrls: ['./rout.component.css']
})
export class RoutComponent implements OnInit {

  constructor(private http: HttpClient){}

    name: string;

    ngOnInit(){

      this.http.get('http://localhost:3001/api/rout/1').subscribe((data) => {
        // this.user = data;
        this.name = data.name;
        console.log({data});
      });
  }

}
