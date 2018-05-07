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
  PickupDate = '';
  PickupTime = '';
  Title = '';
  Destination = '';
  MainPax = '';
  PaxNumber = '';
  MainPaxPhone = '';
  MainPaxEmail = '';
  FlightNumber = '';
  Comments = '';
  data: string;

  constructor(public  _data: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.username = this._data.currentUser.Name;
  }

  postRequest() {
     this.MainPaxEmail = this.MainPaxEmail.toString().replace('@', '_');
     this.MainPaxEmail = this.MainPaxEmail.toString().replace('.', ',');
     this.PickupTime = this.PickupTime.toString().replace(':', '_');

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

    this.http.get('http://localhost:51234/api/trips/newRequest/' + this.data.toString())
      .subscribe(res => {
            console.log('Hasta aqui 5');
            this._data.NavigateTo('home');
      }, error => {
          console.log(error);
    });
  }
}
