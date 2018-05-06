import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
    collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }


  constructor(public  _data: DataService) { }

  ngOnInit() {
  }

}
