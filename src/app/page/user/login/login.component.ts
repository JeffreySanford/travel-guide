import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  email;
  password;


  onSubmit(loginForm) {
    console.log('User has logged in: ' +  this.email);
  }

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
   });

  }


  ngOnInit() {
    const email = this.loginForm.email;
    const password = this.loginForm.password;
  }

}
