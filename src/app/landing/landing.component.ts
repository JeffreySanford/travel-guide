import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
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

export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const benefitsElement = document.getElementById('benefits');
    const quotes = [
      'A local guide can show you the local tourist attractions as well as their favorite places.',
      'Coordinated transportation with your guide, who already know the area.',
      'Don&#39;t risk a bad meal, a local can show you the best five star restaurants as well as the best local favorites!',
      'Experience the city&#39;s nightlife safely and with someone who knows the "spots."',
      'Your guide can provide you with the proper SIM card for calls in the country.',
      'Some guides will even invite you into their home, where you can sleep and experience so much more than in a hotel.',
      'Sometimes local guides will have so much more information about the history of the area than could be glean from books.',
      'Ensure that the logistics of travel from and to the airport and handled.',
      'All guides are thoroughly check for criminal and civil charges.  We pride ourselves in our membership!'
    ];

    let i = 0;
    benefitsElement.innerHTML = 'Your one-stop shop from travelling the world!'
    window.setInterval(function(){
      if (i < quotes.length ) {
        benefitsElement.innerHTML = quotes[i++];
      } else {
        i = 0;
      }
    }, 8000)
  }

}
