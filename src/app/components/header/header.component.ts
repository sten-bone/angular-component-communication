import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="">Component Communication</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                id="parentToChildDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Parent to Child
              </a>
              <ul class="dropdown-menu" aria-labeled-by="parentToChildDropdown">
                <li>
                  <a class="dropdown-item" routerLink="books">
                    Book Information
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" routerLink="fizzbuzz">FizzBuzz</a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                id="childToParentDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Parent to Child
              </a>
              <ul class="dropdown-menu" aria-labeled-by="childToParentDropdown">
                <li>
                  <a class="dropdown-item" routerLink="packing">
                    Packing Boxes
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                id="parentChildInteractionDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Parent-Child Interaction
              </a>
              <ul
                class="dropdown-menu"
                aria-labeled-by="parentChildInteractionDropdown"
              >
                <li>
                  <a class="dropdown-item" routerLink="sorting">
                    Sorting Algorithms
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                role="button"
                id="siblingDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sibling to Sibling
              </a>
              <ul
                class="dropdown-menu"
                aria-labeled-by="siblingDropdown"
              >
                <li>
                  <a class="dropdown-item" routerLink="messaging">
                    Peer-to-Peer Messaging
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
