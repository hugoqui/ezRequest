import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { TripRequestComponent } from './trip-request/trip-request.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import { ProfileComponent } from './profile/profile.component';
import { NewuserComponent } from './newuser/newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavbarComponent,
    TripRequestComponent,
    LoginComponent,
    MytripsComponent,
    ProfileComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
