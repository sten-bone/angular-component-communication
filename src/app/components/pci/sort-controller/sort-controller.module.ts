import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortControllerComponent } from './sort-controller.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectionSortComponent } from '../algorithms/selection-sort/selection-sort.component';
import { BubbleSortComponent } from '../algorithms/bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from '../algorithms/insertion-sort/insertion-sort.component';
import { FormsModule } from '@angular/forms';
import { BogoSortComponent } from '../algorithms/bogo-sort/bogo-sort.component';

const routes: Routes = [
  {
    path: '',
    component: SortControllerComponent,
    children: [
      { path: 'selection-sort', component: SelectionSortComponent },
      { path: 'bubble-sort', component: BubbleSortComponent },
      { path: 'insertion-sort', component: InsertionSortComponent },
      { path: 'bogo-sort', component: BogoSortComponent },
    ],
  },
];

@NgModule({
  declarations: [SortControllerComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class SortControllerModule {}
