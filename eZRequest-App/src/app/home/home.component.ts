import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public username: any;
  constructor(private _data: DataService) { }

  ngOnInit() {
     this.username = this._data.userName;
  }
}
