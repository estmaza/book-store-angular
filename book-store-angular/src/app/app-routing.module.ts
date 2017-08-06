import { Routes } from '@angular/router';

import { AuthorsPageComponent } from './pages/authors-page/authors-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksPageComponent
  },
  {
    path: 'authors',
    component: AuthorsPageComponent
  }
];
