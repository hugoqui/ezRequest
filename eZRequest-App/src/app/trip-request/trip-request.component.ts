import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-trip-request',
  templateUrl: './trip-request.component.html',
  styleUrls: ['./trip-request.component.css']
})

export class TripRequestComponent implements OnInit {
  public username: any;
  PickupDate: any;
  PickupTime = '';
  Title = '';
  Destination = '';
  MainPax = '';
  PaxNumber = 1;
  MainPaxPhone = '';
  MainPaxEmail = '';
  FlightNumber = '';
  Comments = '';
  data: string;

  constructor(public  _data: DataService, private http: HttpClient) { }

  ngOnInit() {
    $('.nav-item').removeClass('active');
    $('#triprequestMenu').addClass('active');

    const yy = new Date().getFullYear();
    const m = new Date().getMonth() + 1;
    const d = new Date().getDay();
    let mm: any;
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }

    let dd: any;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }

    const fullDate = yy + '-' + mm + '-' + dd;

    this.PickupDate =  fullDate;

    const dt = new Date();
    const time = dt.getHours() + ':' + dt.getMinutes() + ':00';

    this.PickupTime = time;

    // this.username = this._data.currentUser.Name;
  }

  postRequest() {
     this.MainPaxEmail = this.MainPaxEmail.toString().replace('@', '_');
     this.MainPaxEmail = this.MainPaxEmail.toString().replace('.', ',');
     this.PickupTime = this.PickupTime.toString().replace(/:/g, '_');

     this.data = this.Comments + '!';
     this.data = this.data + 'Pending!';
     this.data = this.data + this.Destination + '!';
     this.data = this.data + this.FlightNumber + '!';
     this.data = this.data + this.MainPax + '!';
     this.data = this.data + this.MainPaxEmail + '!';
     this.data = this.data + this.MainPaxPhone + '!';
     this.data = this.data + this.PaxNumber + '!';
     this.data = this.data + this.PickupDate + '!';
     this.data = this.data + this.PickupTime + '!';
     this.data = this.data + this.Title + '!';
     this.data = this.data + this._data.currentUser.UserName;
    console.log(this.data.toString());

    this.http.get('https://eztrip.azurewebsites.net/api/trips/newRequest/' + this.data.toString())
      .subscribe(res => {
            console.log('Hasta aqui 5');
            this._data.NavigateTo('home');
      }, error => {
          console.log(error);
    });
  }
}
