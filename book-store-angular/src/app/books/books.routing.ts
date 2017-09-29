import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';

const routes: Routes = [
  { path: '', component: BooksComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);