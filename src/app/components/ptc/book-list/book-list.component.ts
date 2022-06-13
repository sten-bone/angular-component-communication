import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BOOKS } from '../book-data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  selectBook(book: Book): void {
    this.selectedBook = book;
  }

}
