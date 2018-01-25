import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css'],
  animations: [
    trigger('slider', [
      transition(":increment", group([
        query(':enter', [
          style({
            left: '100%'
          }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            left: '-100%'
          }))
        ])
      ])),
      transition(":decrement", group([
        query(':enter', [
          style({
            left: '-100%'
          }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            left: '100%'
          }))
        ])
      ])),
    ])
  ]
})

export class BenefitsComponent implements OnInit {

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

    window.setInterval(function(){

      if (i < quotes.length ) {
        benefitsElement.innerHTML= quotes[i];
        i++;
      } else {
        i = 0;
      }
    }, 5000)
  }

}
