import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trip-request',
  templateUrl: './trip-request.component.html',
  styleUrls: ['./trip-request.component.css']
})

export class TripRequestComponent implements OnInit {
  tripTitle: string;
  public username: any;
  constructor(private http: HttpClient, private _data: DataService) { }

  ngOnInit() {
        this.username = this._data.getUserName();
  }

  getTrips() {
    this.http.get('http://eztrip.azurewebsites.net/api/trips/getTrips')
    .subscribe(res => console.log(res));
  }
}
