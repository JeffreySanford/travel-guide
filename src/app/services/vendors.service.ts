import { Injectable } from '@angular/core';

import { Observable ,  of } from 'rxjs';

import { VENDOR } from '../vendor';
import { MessageService } from './message.service';

@Injectable()
export class VendorsService {

  constructor(private messageService: MessageService) { }

  getGuests(): Observable<VENDOR[]> {
    let VENDORS = [{
      id: 1,
      name: 'DaVinchi Raft trips',
      longitude: 80.453,
      latitude: 64.4657,
      weeklySpecial: 'Colorado Raft Trips',
      price: 150.00
    },{
      id: 2,
      name: 'Franklin',
      longitude: 85.453,
      latitude: 60.4657,
      weeklySpecial: 'Mountain Cabin in the Rocky Mountains for three nights',
      price: 750.00
    }
    ];
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('Receieved guests from GuestService:');

    VENDORS.forEach(guest => {
      this.messageService.add(guest.name)
    });
      console.log(this.messageService);
    return of(VENDORS);
  }
}
