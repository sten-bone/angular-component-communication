import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter.component';
import { FizzbuzzComponent } from '../fizzbuzz/fizzbuzz.component';

@NgModule({
  declarations: [CounterComponent, FizzbuzzComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CounterComponent }]),
  ],
})
export class CounterModule {}
