import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { routes } from './app-routing.module';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AuthorsModule,
    BooksModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
