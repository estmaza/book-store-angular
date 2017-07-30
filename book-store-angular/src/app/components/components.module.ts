import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorListComponent } from './author-list/author-list.component';
import { BookListComponent } from './book-list/book-list.component';

export const COMPONENTS = [
  AuthorListComponent,
  BookListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
