import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHomeComponent : any;
  @Output() cacelRegister = new EventEmitter();
  model: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }
  register() {
    console.log(this.model);
  }

  cancel() {
    this.cacelRegister.emit(false);
  }
}
