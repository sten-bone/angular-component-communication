import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: ['p {margin: 0 !important;}'],
})
export class CounterComponent implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increment(): void {
    this.counter++;
  }
}
