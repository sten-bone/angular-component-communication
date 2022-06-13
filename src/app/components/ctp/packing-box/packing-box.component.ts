import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-packing-box',
  templateUrl: './packing-box.component.html',
  styles: ['.bi-box2, .bi-box2-fill {font-size: 10rem;}']
})
export class PackingBoxComponent implements OnInit {
  @Output() boxFull = new EventEmitter<number>();

  capacity: number = 0;
  stored: number = 0;
  value: number = 0;

  currSmallPrice = 0;
  currMediumPrice = 0;
  currLargePrice = 0;

  smallSize = 1;
  mediumSize = 2;
  largeSize = 3;

  constructor() {}

  ngOnInit(): void {
    this.resetBox();
  }

  getStoragePercent(): number {
    return (this.stored / this.capacity) * 100;
  }

  canStore(size: number): boolean {
    return this.stored + size <= this.capacity;
  }

  storeSmall(): void {
    if (!this.store(this.smallSize)) return;
    this.value += this.currSmallPrice;
    this.getNewSmallPrice();
  }

  storeMedium(): void {
    if (!this.store(this.mediumSize)) return;
    this.value += this.currMediumPrice;
    this.getNewMediumPrice();
  }

  storeLarge(): void {
    if (!this.store(this.largeSize)) return;
    this.value += this.currLargePrice;
    this.getNewLargePrice();
  }

  packBox(): void {
    this.boxFull.emit(this.value);
    this.resetBox();
  }

  private store(size: number): boolean {
    if (!this.canStore(size)) return false;
    this.stored += size;
    return true;
  }

  private resetBox(): void {
    this.capacity = Math.ceil(Math.random() * 10);
    this.stored = 0;
    this.value = 0;

    this.getNewSmallPrice();
    this.getNewMediumPrice();
    this.getNewLargePrice();
  }

  private getNewSmallPrice(): void {
    this.currSmallPrice = PackingBoxComponent.generateRandomPrice(1, 10);
  }

  private getNewMediumPrice(): void {
    this.currMediumPrice = PackingBoxComponent.generateRandomPrice(3, 30);
  }

  private getNewLargePrice(): void {
    this.currLargePrice = PackingBoxComponent.generateRandomPrice(10, 300);
  }

  private static generateRandomPrice(min: number, max: number) {
    if (max < min) return min;
    return Math.random() * (max - min);
  }
}
