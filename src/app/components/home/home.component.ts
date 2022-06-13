import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="m-3">
      <h1>Home</h1>
      <p>
        This site is used as a practice sandbox for communication techniques
        between Angular components. The techniques are organized by category in
        the navigation bar above.
      </p>
      <p>Written by Ben Stone 2022 using Angular and Bootstrap.</p>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
