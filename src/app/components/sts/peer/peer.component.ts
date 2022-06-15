import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from '../models/message';
import { PtpMessagingService } from '../services/ptp-messaging.service';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.css'],
})
export class PeerComponent implements OnInit, OnDestroy {
  @Input() receiveChannel!: string;
  @Input() sendChannel!: string;
  sentMessages: Message[] = [];
  receivedMessages: Message[] = [];
  messageContent: string = '';
  channelSubscription?: Subscription;

  constructor(private ptpService: PtpMessagingService) {}

  ngOnDestroy(): void {
    this.channelSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    if (this.receiveChannel != 'A' && this.receiveChannel != 'B') return;

    let subj =
      this.receiveChannel == 'A'
        ? this.ptpService.messageChannelA$
        : this.ptpService.messageChannelB$;
    subj.subscribe((message) => this.receivedMessages.push(message));
  }

  getMessageChain() {
    return this.receivedMessages
      .map((x) => ({ sent: false, message: x }))
      .concat(this.sentMessages.map((x) => ({ sent: true, message: x })))
      .sort(
        (x, y) => y.message.timeSent.getTime() - x.message.timeSent.getTime()
      );
  }

  send() {
    if (this.sendChannel != 'A' && this.sendChannel != 'B') return;
    this.sentMessages.push(new Message(this.messageContent));
    this.ptpService.sendMessage(this.sendChannel, new Message(this.messageContent));
    this.messageContent = '';
  }
}
