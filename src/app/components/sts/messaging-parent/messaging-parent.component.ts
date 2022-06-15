import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messaging-parent',
  template: `
    <div class="m-3">
      <h1>Peer-to-Peer Messaging</h1>
      <div class="d-flex flex-column flex-md-row">
        <app-peer peerName="A"></app-peer>
        <app-peer peerName="B"></app-peer>
      </div>
    </div>
  `,
  styles: [],
})
export class MessagingParentComponent implements OnInit {
  ngOnInit(): void {}
}
