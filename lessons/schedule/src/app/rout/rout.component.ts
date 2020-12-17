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
    ngOnInit(){

      this.http.get(`http://localhost:3001/api/rout/${this.id}`).subscribe((data) => {
        // this.user = data;
        this.name = data.name;
        console.log({data});
      });
  }

}
