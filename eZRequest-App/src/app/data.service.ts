import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Injectable()

export class DataService {

  data: any;
  public currentUser: any;
  public tripList: any;
  public originalPassword: any;

  constructor(private http: HttpClient, private router: Router) { }

  userLogged(user) {
    this.currentUser = user;
  }

  getUserName() {
    return this.currentUser;
  }

  CheckData(userName, password, errorMessage) {
    this.data = userName + ',' + password;
    // alert(userName);
    this.http.get('https://eztrip.azurewebsites.net/api/trips/login/' + this.data )
    .subscribe(
      response => {
        if (response != null) {
          this.userLogged(response);
          this.originalPassword = password;
          // alert('primera parte');
          this.router.navigate(['home']);
          // alert('llego hasta la navegacion');
        } else {
          // alert('devolvio nulo');
          errorMessage = 'Error al acceder';
        }
      },
      error => {
        errorMessage = 'Error al acceder';
        alert(error);
      }
    )
    ;
  }

  NavigateTo(route) {
    this.router.navigate([route]);
  }

  PostRequest(trip: any) {

    this.http.post('https://eztrip.azurewebsites.net/api/trips/tripRequest/', trip )
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

  getDefaultIfNull(text): string {
    if (text != null) {
      return text.toString();
    } else {
      return '- - -';
    }
  }
}
