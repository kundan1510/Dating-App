import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public accountservice : AccountService, private router: Router) { }

  ngOnInit(): void {
   //this.currentUser$ = this.accountservice.currentUser$;
  }
  login(){
    this.accountservice.login(this.model).subscribe(response =>{
      this.router.navigateByUrl('/members');
    }, error =>{
      console.log(error);
     
    })
  }
  logout(){
    this.accountservice.logout();
    this.router.navigateByUrl('/');
  }
  // getCurrentUser(){
  //     this.accountservice.currentUser$.subscribe(user=>{
  //         this.logedIn= !!user;
  //       }, error=>{
  //       console.log(error);
  //     })

  // }
}
