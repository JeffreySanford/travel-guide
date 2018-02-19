import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { GUIDE } from '../guide';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GuideService {

  private guidesUrl = 'api/guides';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a GuideService message with the MessageService */
  public log(message: string) {
    this.messageService.add(message);
  }

  /** GET heroes from the server */
  getGuides(): Observable<GUIDE[]> {
    return this.http.get<GUIDE[]>(this.guidesUrl)
  }
}
