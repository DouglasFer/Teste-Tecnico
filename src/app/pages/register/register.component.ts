import { Users } from './../shared/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  arrayUser!: Users ;

  constructor(){

  }

  ngOnInit() {
    this.arrayUser = new Users();
  }

  onSubmit() {
    console.log(this.arrayUser)
    this.arrayUser = new Users();
  }
}
