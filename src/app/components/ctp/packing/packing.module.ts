import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingComponent } from './packing.component';
import { RouterModule } from '@angular/router';
import { PackingBoxComponent } from '../packing-box/packing-box.component';

@NgModule({
  declarations: [PackingComponent, PackingBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PackingComponent }]),
  ],
})
export class PackingModule {}
