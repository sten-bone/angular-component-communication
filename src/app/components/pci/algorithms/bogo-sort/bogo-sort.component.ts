import { Component, OnInit } from '@angular/core';
import { SortingAlgorithm, Step } from '../SortingAlgorithm';

@Component({
  selector: 'app-bogo-sort',
  template: `<div class="h2">Bogo Sort</div>`,
  styles: [],
})
export class BogoSortComponent extends SortingAlgorithm implements OnInit {
  ngOnInit(): void {}

  override sort(inputArr: number[]): void {
    this.startSort();

    let arr = [...inputArr];
    let i = 1;
    while (!this.isInOrder(arr)) {
      this.shuffle(arr);
      this.steps.push(new BogoStep(`Step ${i++}:`, [...arr]));
    }
    this.steps.push(new BogoStep('Done:', arr));
    this.solution = arr;

    this.endSort();
  }

  private isInOrder(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
  }

  private shuffle(arr: number[]) {
    let end = arr.length;
    while (end) {
      let i = Math.floor(Math.random() * end--);
      SortingAlgorithm.swap(arr, end, i);
    }
  }
}

export class BogoStep extends Step {
  constructor(label: string, snapshot: number[]) {
    super(label, snapshot);
  }

  override snapshotToString(): string {
    return `<div class="h4">${this.label}</div><p>[${this.snapshot.join(
      ', '
    )}]</p>`;
  }
}
