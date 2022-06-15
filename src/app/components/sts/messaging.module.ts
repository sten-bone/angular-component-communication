import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessagingParentComponent } from './messaging-parent/messaging-parent.component';
import { RouterModule } from '@angular/router';
import { PeerComponent } from './peer/peer.component';

@NgModule({
  declarations: [MessagingParentComponent, PeerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MessagingParentComponent }]),
  ],
})
export class MessagingModule {}
