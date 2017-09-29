import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '../shared/shared.module';

// Routes
import { routing } from './authors.routing';

// Components
import { AuthorsPageComponent } from './authors-page/authors-page.component';
//import { AuthorListComponent } from './author-list/author-list.component';
//import { AuthorDetailComponent } from './author-detail/author-detail.component';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  exports: [],
  declarations: [
    AuthorsPageComponent,
    //AuthorListComponent,
    //AuthorDetailComponent
  ],
  providers: [],
})
export class AuthorsModule { }
