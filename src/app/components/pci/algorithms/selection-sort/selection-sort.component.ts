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

    let arr: number[] = [...inputArr];
    for (let i: number = 0; i < arr.length; i++) {
      let searchSlice = arr.slice(i);
      let minIndex = i + searchSlice.indexOf(Math.min(...searchSlice));
      this.steps.push(
        new SelectionStep(`Step ${i + 1}:`, arr, i - 1, i, minIndex)
      );
      SortingAlgorithm.swap(arr, i, minIndex);
    }
    this.steps.push(new SelectionStep('Done:', arr, -1, -1, -1));
    this.solution = arr;

    this.endSort();
  }
}

export class SelectionStep extends Step {
  sortedToIndex;
  currIndex;
  swapIndex;

  constructor(
    label: string,
    snapshot: number[],
    sortedToIndex: number,
    currIndex: number,
    currMinIndex: number
  ) {
    super(label, snapshot);
    this.currIndex = currIndex;
    this.sortedToIndex = sortedToIndex;
    this.swapIndex = currMinIndex;
  }

  override snapshotToString(): string {
    let output = `<h4>${this.label}</h4>`;
    if (
      this.currIndex == -1 &&
      this.sortedToIndex == -1 &&
      this.swapIndex == -1
    ) {
      output += `<p>[${this.snapshot.join(', ')}]</p>`;
      return output;
    }
    output += '[';

    output += this.snapshot
      .map((x, i) => {
        let classList = [];

        if (i <= this.sortedToIndex) classList.push('text-success');
        if (i == this.currIndex) classList.push('text-decoration-underline');
        if (i == this.swapIndex) classList.push('fw-bold');

        if (classList.length > 0)
          return `<span class="${classList.join(' ')}">${x}</span>`;
        else return x;
      })
      .join(', ');

    output += ']';
    return output;
  }
}
