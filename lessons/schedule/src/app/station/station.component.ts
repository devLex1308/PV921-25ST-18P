import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  constructor(private http: HttpClient){}

    ngOnInit(){

      this.http.get('http://localhost:3001/api/station/1').subscribe((data) => {
        // this.user = data;
        console.log({data});
      });
  }

}
