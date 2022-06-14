import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  template: `<p class="fs-3">{{ phrase }}</p> `,
  styles: ['p {margin: 0;}'],
})
export class FizzbuzzComponent implements OnChanges {
  private mods = [
    { moduloVal: 3, replacement: 'fizz' },
    { moduloVal: 5, replacement: 'buzz' },
    { moduloVal: 7, replacement: 'bazz' },
  ];
  @Input() num!: number;
  phrase: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const currNum = changes['num'].currentValue;
    this.phrase =
      this.mods
        .map((x) =>
          Number(currNum) % Number(x.moduloVal) == 0 ? x.replacement : ''
        )
        .join('') || currNum;
  }
}
