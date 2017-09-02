import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksPageComponent } from './books-page/books-page.component';

const routes: Routes = [
  { path: '', component: BooksPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);