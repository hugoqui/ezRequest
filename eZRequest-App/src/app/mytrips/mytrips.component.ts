import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../data.service';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})

export class MytripsComponent implements OnInit {
  constructor(private http: HttpClient, public _data: DataService) { }

  myTrips: any;

  ngOnInit() {
    $('.nav-item').removeClass('active');
    $('#mytripsMenu').addClass('active');

    const url = 'https://eztrip.azurewebsites.net/api/trips/gettripsbyclient/' +   this._data.currentUser.UserName;
    console.log(url);

    this.http.get(url)
    .subscribe(
      response => {
          this.myTrips = response;
          console.log(this.myTrips);
        }
      );
  }

  getDefaultIfNull(text) {
    return this._data.getDefaultIfNull(text);
  }
}
