import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortingAlgorithm } from '../algorithms/SortingAlgorithm';

@Component({
  selector: 'app-sort-controller',
  templateUrl: './sort-controller.component.html',
  styles: [],
})
export class SortControllerComponent implements OnInit {
  selectedAlgorithm: SortingAlgorithm | undefined;
  arraySize = 10;
  inputArray: number[] | undefined;
  selector: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addArraySize(size: number): void {
    this.inputArray = undefined;
    this.arraySize += size;
    if (this.arraySize + size < 0) this.arraySize = 0;
    if (this.arraySize + size > 50) this.arraySize = 50;
  }

  activateAlgorithm(algo: SortingAlgorithm) {
    this.selectedAlgorithm = algo;
  }

  generateArray() {
    this.inputArray = Array.from({ length: this.arraySize }, () =>
      Math.floor(Math.random() * 100)
    );
    if (this.selectedAlgorithm) {
      this.selectedAlgorithm.reset();
    }
  }

  displayArray(arr: any[]): string {
    return `[${arr.join(', ')}]`;
  }

  routeTo(event: Event) {
    if (!event) return;
    this.selector = (event.target as HTMLInputElement).value;
    this.router.navigate(['sorting/' + this.selector]);
  }
}
