import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule'
  },
  {
    path: 'authors',
    loadChildren: './authors/authors.module#AuthorsModule'
  }
];
