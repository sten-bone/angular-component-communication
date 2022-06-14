import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Book } from 'src/app/components/ptc/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsComponent implements OnInit {
  @Input() book!: Book;

  constructor() {}

  ngOnInit(): void {}
}
