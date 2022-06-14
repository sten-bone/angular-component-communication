import { Component, OnInit } from '@angular/core';
import { SortingAlgorithm, Step } from '../SortingAlgorithm';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styles: [],
})
export class SelectionSortComponent extends SortingAlgorithm implements OnInit {
  ngOnInit(): void {}

  override sort(inputArr: number[]): void {
    this.startSort();

    let arr = [...inputArr];
    this.solution = SortingAlgorithm.swap(arr, 0, arr.length - 1);

    this.endSort();
  }
}

export class SelectionStep extends Step {
  sortedToIndex;
  currMinIndex;

  constructor(
    label: string,
    snapshot: number[],
    sortedToIndex: number,
    currMinIndex: number
  ) {
    super(label, snapshot);
    this.sortedToIndex = sortedToIndex;
    this.currMinIndex = currMinIndex;
  }

  override snapshotToString(): string {
    return '';
  }
}
