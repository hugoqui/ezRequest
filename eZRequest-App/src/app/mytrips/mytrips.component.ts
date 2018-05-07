import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';
@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})

export class MytripsComponent implements OnInit {
  myTrips: any;
  myList: any[];
  constructor(public _data: DataService) { }

  ngOnInit() {
    this.myList = this._data.GetTrips();
    this.myTrips = this._data.tripList;
  }

  Type() {
    console.log(this.myTrips);
  }
}
