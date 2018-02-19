import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { hostElement } from '@angular/core/src/render3/instructions';

const person: Object = {};
let userName: String;

function getUser() {
  userName = 'Bob Bobenstein';
  return userName;
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

  userName = getUser();

  public links = [
    '/landing',
    '/guest',
    '/host',
    '/vendor'
  ];

  public userLinks = [
    '/login',
    '/register',
    '/account',
    '/settings'
  ]
  ngOnInit() {
    const links = this.links
  }
}
