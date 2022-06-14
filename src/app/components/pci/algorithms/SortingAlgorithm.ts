import { ArgumentOutOfRangeError } from 'rxjs';

export class SortingAlgorithm {
  showSteps: boolean = true;
  steps: Step[] = [];
  solution: number[] = [];
  startedSorting: boolean = false;
  doneSorting: boolean = false;

  startTime: number = 0;
  endTime: number = 0;

  toggleStepDisplay(): void {
    this.showSteps = !this.showSteps;
  }

  sort(arr: number[]): void {
    this.startSort();
    this.solution = arr;
    this.endSort();
  }

  startSort(): void {
    this.startedSorting = true;
    this.startTiming();
  }

  endSort(): void {
    this.doneSorting = true;
    this.endTiming();
  }

  getTotalTimeMs(): number {
    if (!this.startedSorting || !this.doneSorting) return 0;
    return Math.round((this.endTime - this.startTime) * 100) / 100;
  }

  startTiming(): void {
    this.startTime = performance.now();
  }

  endTiming(): void {
    this.endTime = performance.now();
  }

  reset(): void {
    this.startedSorting = false;
    this.doneSorting = false;
    this.startTime = 0;
    this.endTime = 0;
    this.steps = [];
    this.solution = [];
  }

  static swap(arr: any[], index1: number, index2: number): any[] {
    if (index1 < 0 || index2 < 0 || index1 > arr.length || index2 >= arr.length)
      throw new Error(`Invalid swap indices ${index1} and ${index2} provided.`);
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  }
}

export class Step {
  label: string;
  snapshot: number[];

  constructor(label: string, snapshot: number[]) {
    this.label = label;
    this.snapshot = [...snapshot];
  }

  snapshotToString(): string {
    return `[${this.snapshot.join(', ')}]`;
  }
}
