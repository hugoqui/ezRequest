import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  password: string;
  address: string;
  name: string;
  contactName: string;

  constructor(public _data: DataService, private http: HttpClient) { }

  ngOnInit() {
    $('.nav-item').removeClass('active');
    $('#profileMenu').addClass('active');

    this.email = this._data.currentUser.Email;
    this.password = this._data.originalPassword;
    this.address = this._data.currentUser.Address;
    this.name = this._data.currentUser.Name;
    this.contactName = this._data.currentUser.Contact;
  }

  postData() {
    let email = this.email.replace('@', '_');
    email = this.email.replace('.', ',');

    let request = this._data.currentUser.UserName  + '!' + email + '!';
    request = request + this.password + '!' + this.address + '!' + this.name + '!' + this.contactName;
    this.http.get('https://eztrip.azurewebsites.net/api/trips/UpdateClient/' + request)
    .subscribe(
      response => {
        console.log(response);
        this._data.NavigateTo('home');
      });



  }
}
