import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () =>
      import('./components/ptc/book-list/book-list.module').then(
        (m) => m.BookListModule
      ),
  },
  {
    path: 'fizzbuzz',
    loadChildren: () =>
      import('./components/ptc/counter/counter.module').then(
        (m) => m.CounterModule
      ),
  },
  {
    path: 'packing',
    loadChildren: () =>
      import('./components/ctp/packing/packing.module').then(
        (m) => m.PackingModule
      ),
  },
  {
    path: 'sorting',
    loadChildren: () =>
      import('./components/pci/sort-controller/sort-controller.module').then(
        (m) => m.SortControllerModule
      ),
  },
  {
    path: 'messaging',
    loadChildren: () =>
      import('./components/sts/messaging-parent/messaging-parent.module').then(
        (m) => m.MessagingParentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
