import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortControllerComponent } from './sort-controller.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectionSortComponent } from '../algorithms/selection-sort/selection-sort.component';
import { BubbleSortComponent } from '../algorithms/bubble-sort/bubble-sort.component';

const routes: Routes = [
  {
    path: '',
    component: SortControllerComponent,
    children: [
      { path: 'selection-sort', component: SelectionSortComponent },
      { path: 'bubble-sort', component: BubbleSortComponent },
    ],
  },
];

@NgModule({
  declarations: [SortControllerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SortControllerModule {}
