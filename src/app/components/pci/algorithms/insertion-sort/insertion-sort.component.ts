import { Component, OnInit } from '@angular/core';
import { SortingAlgorithm, Step } from '../SortingAlgorithm';

@Component({
  selector: 'app-insertion-sort',
  template: `<div class="h2">Insertion Sort</div>`,
  styles: [],
})
export class InsertionSortComponent extends SortingAlgorithm implements OnInit {
  ngOnInit(): void {}

  override sort(inputArr: number[]): void {
    this.startSort();

    let arr = [...inputArr];
    for (let i = 1; i < arr.length; i++) {
      let swapBackToIndex = -1;
      let j = i;
      let arrCopy = [...arr];
      while (j > 0 && arr[j] < arr[j - 1]) {
        SortingAlgorithm.swap(arr, j, j - 1);
        j--;
        swapBackToIndex = j;
      }
      this.steps.push(
        new InsertionStep(`Step ${i + 1}`, arrCopy, i, swapBackToIndex)
      );
    }
    this.steps.push(new InsertionStep('Done', arr, -1, -1));
    this.solution = arr;

    this.endSort();
  }
}

export class InsertionStep extends Step {
  currIndex;
  swapBackToIndex;

  constructor(
    label: string,
    snapshot: number[],
    currIndex: number,
    swapBackToIndex: number
  ) {
    super(label, snapshot);
    this.currIndex = currIndex;
    this.swapBackToIndex = swapBackToIndex;
  }

  override snapshotToString(): string {
    let output = '';

    if (this.label) {
      output += `<div class="h4">${this.label}</div>`;
    }
    if (this.currIndex == -1 && this.swapBackToIndex == -1) {
      return output + `<p>[${this.snapshot.join(', ')}]</p>`;
    }
    output += '<p>[';
    output += this.snapshot
      .map((x, i) => {
        let classList: string[] = [];

        if (i == this.currIndex) classList.push('fw-bold');
        if (
          this.swapBackToIndex != -1 &&
          i >= this.swapBackToIndex &&
          i < this.currIndex
        )
          classList.push('text-decoration-underline');

        if (classList.length > 0)
          return `<span class="${classList.join(' ')}">${x}</span>`;
        else return x;
      })
      .join(', ');
    output += ']</p>';

    return output;
  }
}
