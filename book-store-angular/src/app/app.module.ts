import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MdTableModule } from '@angular/material';
import { AlertModule } from 'ngx-bootstrap';

import { routes } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';
import { AuthorsPageComponent } from './pages/authors-page/authors-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsPageComponent,
    BooksPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ComponentsModule,
    ServicesModule,
    MdTableModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
