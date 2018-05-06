import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip-request',
  templateUrl: './trip-request.component.html',
  styleUrls: ['./trip-request.component.css']
})

export class TripRequestComponent implements OnInit {
  public username: any;
  PickupDate: any;
  PickupTime: any;
  Title: any;
  Destination: any;
  MainPax: any;
  PaxNumber: any;
  MainPaxPhone: any;
  MainPaxEmail: any;
  FlightNumber: any;
  Comments: any;

  constructor(public  _data: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.username = this._data.currentUser.Name;
  }

  postRequest() {



  }
}
