import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Injectable()

export class DataService {

  data: any;
  public currentUser: any;
  public tripList: any;

  constructor(private http: HttpClient, private router: Router) { }

  userLogged(user) {
    this.currentUser = user;
  }

  getUserName() {
    return this.currentUser;
  }

  CheckData(userName, password, errorMessage) {
    this.data = userName + ',' + password;
    this.http.get('http://eztrip.azurewebsites.net/api/trips/login/' + this.data )
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

  GetTrips(): any {
    this.http.get('http://eztrip.azurewebsites.net/api/trips/gettripsbyclient/' + this.currentUser.UserName )
    .subscribe(response => {
          this.tripList = response;
          return response;
      }
    )
    ;
  }

  NavigateTo(route) {
    this.router.navigate([route]);
  }

  PostRequest(trip: any) {

    this.http.post('http://eztrip.azurewebsites.net/api/trips/tripRequest/', trip )
    .subscribe(
      response => {
        if (response != null) {
          this.userLogged(response);
          this.router.navigate(['home']);
        } else {
          return 'Error al crear solicitud';
        }
      }
    )
    ;
  }
}
