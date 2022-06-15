import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: string = '';
  arraySizeValid: boolean = true;

  private selectorOptions = ['selection-sort', 'bubble-sort', 'insertion-sort', 'bogo-sort'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRoute();
    this.checkArraySize();
  }

  checkArraySize() {
    this.inputArray = [];
    if (this.selector === 'bogo-sort' && this.arraySize > 5) {
      this.arraySizeValid = false;
    }
    else this.arraySizeValid = true;
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

  getRoute() {
    this.selector = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    if (this.selectorOptions.indexOf(this.selector) == -1) this.selector = '';
  }
}
