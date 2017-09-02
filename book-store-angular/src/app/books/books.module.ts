import { NgModule } from '@angular/core';

// Routes
import { routing } from './books.routing';

// Components
import { BooksPageComponent } from './books-page/books-page.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [routing],
  exports: [],
  declarations: [
    BooksPageComponent,
    BookListComponent
  ],
  providers: [],
})
export class BooksModule { }
