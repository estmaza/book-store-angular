import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService } from './book.service';
import { AuthorService } from './author.service';

export const SERVICES = [
  BookService,
  AuthorService
]

@NgModule({
  imports: [
    CommonModule
  ],
  providers: SERVICES
  // why line below brokes the app? exports doesn't allowed in modules?
  //exports: SERVICES
})
export class ServicesModule { }
