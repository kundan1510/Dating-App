import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { User } from './_model/user';
import { AccountService } from './_Services/account.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users:any;

  constructor( private accountservice: AccountService) {}
  ngOnInit() {
   
   this.setCurrentUser();
  }
  setCurrentUser(){
    const user: User =JSON.parse(localStorage.getItem('user'));
    this.accountservice.setCurrentUser(user);
  }
  
}


