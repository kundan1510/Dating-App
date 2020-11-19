import { Component, OnInit } from '@angular/core';
import { report } from 'process';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any={}
 //currentUser$: Observable<User>;

  constructor(public accountservice : AccountService) { }

  ngOnInit(): void {
   //this.currentUser$ = this.accountservice.currentUser$;
  }
  login(){
    this.accountservice.login(this.model).subscribe(response =>{
      console.log(response);
    }, error =>{
      console.log(error);
     
    })
  }
  logout(){
    this.accountservice.logout();
  }
  // getCurrentUser(){
  //     this.accountservice.currentUser$.subscribe(user=>{
  //         this.logedIn= !!user;
  //       }, error=>{
  //       console.log(error);
  //     })

  // }
}
