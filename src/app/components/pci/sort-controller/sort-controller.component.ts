import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';
import { SortingAlgorithm } from '../algorithms/SortingAlgorithm';

@Component({
  selector: 'app-sort-controller',
  templateUrl: './sort-controller.component.html',
  styles: [],
})
export class SortControllerComponent implements OnInit {
  selectedAlgorithm?: SortingAlgorithm;
  arraySize = 10;
  inputArray: number[] = [];
  selector = '';
  arraySizeValid = true;

  selectorOptions = [
    { name: 'Bogo Sort', value: 'bogo-sort' },
    { name: 'Bubble Sort', value: 'bubble-sort' },
    { name: 'Insertion Sort', value: 'insertion-sort' },
    { name: 'Selection Sort', value: 'selection-sort' },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.selector = this.router
      .parseUrl(this.router.url)
      .root.children[PRIMARY_OUTLET].segments.slice(-1)
      .toString();
    console.log(this.selector);
    this.checkArraySize();
  }

  resetInputArray() {
    this.checkArraySize();
    this.inputArray = [];
  }

  checkArraySize() {
    this.arraySizeValid = !(
      this.selector === 'bogo-sort' && this.arraySize > 5
    );
  }

  generateArray() {
    this.inputArray = Array.from({ length: this.arraySize }, () =>
      Math.floor(Math.random() * 100)
    );
    this.selectedAlgorithm?.reset();
  }

  setRoute() {
    this.router.navigate([this.selector], {
      relativeTo: this.activatedRoute,
    });
  }
}
