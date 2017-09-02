import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsPageComponent } from './authors-page/authors-page.component';

const routes: Routes = [
  { path: '', component: AuthorsPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);