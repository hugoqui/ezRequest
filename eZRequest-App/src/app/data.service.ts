import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Injectable()

export class DataService {

  public userName: any;
  data: any;
  myvariable = 'hola';
  constructor(private http: HttpClient, private router: Router) { }

  userLogged(userName) {
    this.userName = userName.Name;
  }

  getUserName() {
    return this.userName;
  }

  CheckData(userName, password, errorMessage) {
    this.data = userName + ',' + password;
    this.http.get('http://localhost:51234/api/trips/clientLogin/' + this.data )
    .subscribe(
      response => {
        if (response != null) {
          this.userLogged(response);
          this.router.navigate(['home']);
        } else {
          errorMessage = 'Error al acceder';
        }
      },
      error => errorMessage = 'Error al acceder'
    )
    ;
  }



}
