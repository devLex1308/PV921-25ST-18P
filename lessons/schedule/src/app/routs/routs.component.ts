import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-routs',
  templateUrl: './routs.component.html',
  styleUrls: ['./routs.component.css']
})
export class RoutsComponent implements OnInit {

  constructor(private http: HttpClient){}

  routs: object = [];
  ngOnInit() {
  	this.http.get('http://localhost:3001/api/rout').subscribe((data) => {
        // this.user = data;

        this.routs = Object.keys(data).map(key => (data[key]));
        console.log({data});
      });
  }

}
