import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './components/authors.component';

const routes: Routes = [
  { path: '', component: AuthorsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);