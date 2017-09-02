import { NgModule } from '@angular/core';

// Routes
import { routing } from './authors.routing';

// Components
import { AuthorsPageComponent } from './authors-page/authors-page.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

@NgModule({
  imports: [routing],
  exports: [],
  declarations: [
    AuthorsPageComponent,
    AuthorListComponent,
    AuthorDetailComponent
  ],
  providers: [],
})
export class AuthorsModule { }
