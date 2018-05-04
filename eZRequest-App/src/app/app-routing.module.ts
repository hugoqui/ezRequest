import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripRequestComponent } from './trip-request/trip-request.component';

const routes: Routes = [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'triprequest', component: TripRequestComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
