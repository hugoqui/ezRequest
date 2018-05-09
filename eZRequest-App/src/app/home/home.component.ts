import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public username: string;
  constructor(public  _data: DataService) { }

  ngOnInit() {
    $('.nav-item').removeClass('active');
    $('#homeMenu').addClass('active');

    this.username = this._data.currentUser.Name;
  }
}
