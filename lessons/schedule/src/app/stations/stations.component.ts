import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor(private http: HttpClient){}

  stations: object = [];
  ngOnInit() {
  	this.http.get('http://localhost:3001/api/station').subscribe((data) => {
        // this.user = data;

        this.stations = Object.keys(data).map(key => (data[key]));
        console.log({data});
      });
  }

}
