import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-trip-request',
  templateUrl: './trip-request.component.html',
  styleUrls: ['./trip-request.component.css']
})

export class TripRequestComponent implements OnInit {
  tripTitle: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getTrips() {
    this.http.get('http://eztrip.azurewebsites.net/api/trips/getTrips')
    .subscribe(res => console.log(res))
    ;
    // return this.http.get<Config>(this.configUrl);
  }

  // this.http.get('http://eztrip.azurewebsites.net/api/trips/getTrips');

  // this.http.get('people.json').subscribe((res:Response) => this.people = res.json());

}
