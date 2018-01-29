import { Component, OnInit, Output, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


  logForm(values) {
    let firstName = values.name['first-name'];
    console.log(firstName)
    console.log("Form Submitted!");
    console.log('Register clicked submit: ' + values)

    let url = 'register/successful-submission/' + firstName
    this.router.navigateByUrl(url)

  }

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  // @Output() Values
  // debugger

}

