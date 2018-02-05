import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

import { MatCheckboxModule, MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {

  }

}
