import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styles: [
  ]
})
export class PackingComponent implements OnInit {
  boxesPacked: number = 0;
  profit: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getCounter(n: number): Array<number> {
    return Array(n);
  }

  addPacked(value: number) {
    this.profit += value;
    this.boxesPacked++;
  }
}
