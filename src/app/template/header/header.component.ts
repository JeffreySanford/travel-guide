import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


const person: Object = {};
let name: String;

function getUser() {
  name = 'Bob Bobenstein';
  return name;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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

export class HeaderComponent implements OnInit {

  constructor() { }

  name = getUser();

  ngOnInit() {}
}
