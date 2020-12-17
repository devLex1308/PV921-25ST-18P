import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rout',
  templateUrl: './rout.component.html',
  styleUrls: ['./rout.component.css']
})
export class RoutComponent implements OnInit {

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute){
    this.id = activateRoute.snapshot.params['id'];
  }

    name: string;
    id: number;
    stations: object = [];
    ngOnInit(){

      this.http.get(`http://localhost:3200/api/rout/${this.id}`).subscribe((data) => {
        // this.user = data;
        this.name = data.name;
        this.http.get(`http://localhost:3200/api/station`).subscribe((dataS) => {
          let stations = Object.keys(dataS).map(key => (dataS[key]));
          for (let i = 0; i < data.waybill.length; i++)
          {
            this.stations[i] = stations[data.waybill[i][0]];
            console.log(stations[data.waybill[i][0]]);
          }
          console.log(this.stations);
        });
        console.log({data});
      });
  }

}
