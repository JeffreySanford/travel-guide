import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { GUEST } from '../../guest';
import { GuestService } from '../../services/guests.service';

import { GUIDE } from '../../guide';
import { GuideService } from '../../services/guides.service';

import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
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

export class GuestComponent implements OnInit {

  public guests: GUEST[];
  public guides: GUIDE[];

  log = '';

  logCheckbox(element: HTMLInputElement): void {
    this.log = `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
  }

  getGuests(): void {
    this.guestService.log('Guest Service Fired.')
    this.guestService.getGuests()
      .subscribe(guests => this.guests = guests);
  }

  getGuides(): void {
    this.guideService.log('Guide Service Fired.')
    this.guideService.getGuides()
      .subscribe(guides => this.guides = guides);
  }

  constructor(
    public guestService: GuestService,
    public guideService: GuideService
  ) { }

  ngOnInit() {
    this.getGuests();
    this.getGuides();

    let attractions = {
      tourism: true,
      food: true,
      accomodations: true,
      dynamic: false
    }

  }
}
