import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string;
  userName = '';
  password = '';

  user: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  SendData() {
    this.data = this.userName + ',' + this.password;
    this.http.get('http://localhost:51234/api/trips/clientLogin/' + this.data )
    .subscribe(
      response => {
        this.user = response;
        this.GiveAccess();
      }
    );
  }

  GiveAccess() {
    this.router.navigate(['home']);
  }
}
