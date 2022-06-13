import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styles: ['p {margin: 0;}'],
})
export class FizzbuzzComponent implements OnChanges {
  private mods = { 3: 'fizz', 5: 'buzz', 7: 'bazz' };
  @Input() num!: number;
  phrase: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const currNum = changes['num'].currentValue;
    this.phrase = '';
    for (const [mod, replacement] of Object.entries(this.mods)) {
      if (Number(currNum) % Number(mod) == 0) {
        this.phrase += replacement;
      }
    }
    if (this.phrase == '') this.phrase = currNum;
  }
}
