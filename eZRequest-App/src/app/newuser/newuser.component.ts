import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  Name = '';
  Contact = '';
  Address = '';
  Email = '';
  Password = '';
  UserName = '';

  data: any;

  constructor(private _data: DataService , private http: HttpClient) { }

  ngOnInit() {
  }

  postRequest() {

    this.data = {
      Name: this.Name,
      UserName: this.UserName,
      Address: this.Address,
      Email: this.Email,
      Password: this.Password,
      Contact: this.Contact
    };

    this.http
    .post('https://eztrip.azurewebsites.net/api/apiclients', this.data)
      .subscribe(res => {
        console.log('Hasta aqui');
        alert('Usuario registrado, puede inicar sesión.');
        this._data.NavigateTo('');
      }, error => {
          console.log(error);
    });
 }

}
