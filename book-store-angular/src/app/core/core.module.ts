import { NgModule } from '@angular/core';

// Services
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { HttpService } from './services/http.service';

// Models
import { Author } from './models/author';
import { Book } from './models/book';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthorService,
    BookService,
    HttpService
  ],
})
export class CoreModule { }
