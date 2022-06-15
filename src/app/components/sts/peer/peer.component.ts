import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Message } from '../models/message';
import { PtpMessagingService } from '../services/ptp-messaging.service';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeerComponent implements OnInit {
  @Input() peerName!: string;
  messageContent: string = '';

  constructor(public svc: PtpMessagingService) {}

  ngOnInit(): void {}

  send() {
    if (!this.messageContent) {
      return;
    }
    this.svc.sendMessage(new Message(this.peerName, this.messageContent));
    this.messageContent = '';
  }
}
