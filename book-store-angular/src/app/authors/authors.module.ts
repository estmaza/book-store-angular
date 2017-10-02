import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '../shared/shared.module';

// Routes
import { routing } from './authors.routing';

// Components
import { AuthorsComponent } from './components/authors.component';
import { AuthorItemComponent } from './components/author-item.component';
import { AuthorDetailComponent } from './components/author-detail.component';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  exports: [],
  declarations: [
    AuthorsComponent,
    AuthorItemComponent,
    AuthorDetailComponent
  ],
  providers: [],
})
export class AuthorsModule { }
