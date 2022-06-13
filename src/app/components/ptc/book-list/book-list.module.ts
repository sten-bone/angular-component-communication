import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from '../book-details/book-details.component';

@NgModule({
  declarations: [BookListComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent,
      },
    ]),
  ],
})
export class BookListModule {}
