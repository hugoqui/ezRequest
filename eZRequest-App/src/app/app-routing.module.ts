import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripRequestComponent } from './trip-request/trip-request.component';
import { LoginComponent } from './login/login.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
      path: '', component: LoginComponent
    },
    {
      path: 'triprequest', component: TripRequestComponent
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'mytrips', component: MytripsComponent
    },
    {
      path: 'profile', component: ProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
