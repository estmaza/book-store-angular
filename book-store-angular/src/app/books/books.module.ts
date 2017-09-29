import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Routes
import { routing } from './books.routing';

/* Components */
import { BooksComponent } from './books.component';
import { BookItemComponent } from './components/book-item.component';
import { NewBookComponent } from './components/new-book.component';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  exports: [],
  declarations: [
    BooksComponent,
    BookItemComponent,
    NewBookComponent
  ],
  providers: [],
})
export class BooksModule { }
