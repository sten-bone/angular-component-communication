import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class PtpMessagingService {
  private channelSource = new Subject<Message[]>();
  private messages: Message[] = [];

  channel$ = this.channelSource.asObservable();

  sendMessage(message: Message) {
    if(!message?.content){
      return;
    }
    this.messages.unshift(message);
    this.channelSource.next(this.messages);
  }
}
