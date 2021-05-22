import { Component, OnInit } from '@angular/core';
import { UserstorageService } from '../userstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  List : any = [];
  constructor(private userstorageService:UserstorageService) { }

  ngOnInit(): void {
    this.List = this.userstorageService.fetchFromLocalStorage();
    console.log(this.List);
  }

}
