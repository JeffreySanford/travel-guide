import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { GUEST } from '../guest';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GuestService {

  private guestsUrl = 'api/guests';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a GuestService message with the MessageService */
  public log(message: string) {
    this.messageService.add(message);
  }

  /** GET heroes from the server */
  getGuests(): Observable<GUEST[]> {
    return this.http.get<GUEST[]>(this.guestsUrl)
  }
}
