import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
})
export class CounterComponent implements OnInit {
  counter = 0;

  ngOnInit(): void {}

  increment(): void {
    this.counter++;
  }
}
