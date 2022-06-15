import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class PtpMessagingService {
  private messageChannelASource = new Subject<Message>();
  private messageChannelBSource = new Subject<Message>();

  messageChannelA$ = this.messageChannelASource.asObservable();
  messageChannelB$ = this.messageChannelBSource.asObservable();

  sendMessage(channel: string, message: Message) {
    if (channel != 'A' && channel != 'B') {
      console.log('NOTSENDING');
      return;
    }
    channel == 'A'
      ? this.messageChannelASource.next(message)
      : this.messageChannelBSource.next(message);
  }
}
