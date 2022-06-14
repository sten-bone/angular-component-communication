import { Component, OnInit } from '@angular/core';
import { SortingAlgorithm, Step } from '../SortingAlgorithm';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styles: [],
})
export class BubbleSortComponent extends SortingAlgorithm implements OnInit {
  ngOnInit(): void {}

  override sort(inputArr: number[]): void {
    this.startSort();

    let arr: number[] = [...inputArr];
    for (let i = 0; i < arr.length - 1; i++) {
      let didSwap: boolean = false;
      this.steps.push(new BubbleStep(`Pass ${i + 1}:`, arr, 0, -1, -1));
      for (let j = 0; j < arr.length - i - 1; j++) {
        this.steps.push(new BubbleStep('', arr, arr.length - i, j, j + 1));
        if (arr[j] > arr[j + 1]) {
          SortingAlgorithm.swap(arr, j, j + 1);
          didSwap = true;
        }
      }
      if (!didSwap) break;
    }
    this.steps.push(new BubbleStep('Done:', arr, -1, -1, -1));
    this.solution = arr;

    this.endSort();
  }
}

export class BubbleStep extends Step {
  sortedFromIndex;
  index1;
  index2;

  constructor(
    label: string,
    snapshot: number[],
    sortedFromIndex: number,
    index1: number,
    index2: number
  ) {
    super(label, snapshot);
    this.sortedFromIndex = sortedFromIndex;
    this.index1 = index1;
    this.index2 = index2;
  }

  override snapshotToString(): string {
    let output = '';
    if (this.label) {
      output += `<h4>${this.label}</h4>`;
    }
    if (this.index1 == -1 && this.index2 == -1) {
      if (this.sortedFromIndex == -1) {
        output += `<p>[${this.snapshot.join(', ')}]</p>`;
      }
      return output;
    }
    output += '<p>[';
    output += this.snapshot
      .map((x, i) => {
        let classList: string[] = [];
        if (i == this.index1 || i == this.index2) classList.push('fw-bold');
        if (i >= this.sortedFromIndex) classList.push('text-success');

        if (classList.length > 0)
          return `<span class="${classList.join(' ')}">${x}</span>`;
        else return x;
      })
      .join(', ');
    output += ']</p>';
    return output;
  }
}
