import { TestBed, inject } from '@angular/core/testing';

import { GuestService } from './guests.service';
import { MessageService } from './message.service';

describe('GuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestService]
    });
  });

  it('should be created', inject([GuestService], (service: GuestService) => {
    expect(service).toBeTruthy();
  }));
});
