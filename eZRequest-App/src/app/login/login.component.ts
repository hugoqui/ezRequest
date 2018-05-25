import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string;
  userName = '';
  password = '';
  errorMessage = '';
  constructor(private http: HttpClient, private router: Router, private _data: DataService) { }

  ngOnInit() {
  }

  sendData() {
    this._data.CheckData(this.userName, this.password, this.errorMessage);
  }

  newUser() {
    this._data.NavigateTo('newuser');
  }
}
