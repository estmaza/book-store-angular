import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { TitleComponent } from './components/title.component';
import { MenuComponent } from './components/menu.component';
import { ContentComponent } from './components/content.component';

// Services
import { AuthorService } from './services/author.service';
import { BookService } from './services/book.service';
import { HttpService } from './services/http.service';

// Models
import { Author } from './models/author';
import { Book } from './models/book';
import { MenuItem } from './models/menuItem';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    TitleComponent,
    MenuComponent,
    ContentComponent
  ],
  declarations: [
    TitleComponent,
    MenuComponent,
    ContentComponent
  ],
  providers: [
    AuthorService,
    BookService,
    HttpService
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
