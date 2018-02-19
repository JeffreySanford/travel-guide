import { Component, OnInit, Output, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3d(-100%, 0, 0)'
        }),
        animate('1s 200ms ease-in')
      ]),
      transition('* => void', [
        animate('1s 200ms ease-out', style({
          opacity: 0,
          transform: 'translate3d(0, 0, 0)'
        }))
      ])
    ])
  ]
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

