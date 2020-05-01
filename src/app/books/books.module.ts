import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { SharingModule } from '../sharing/sharing.module';
import { GoogleLibraryComponent } from './google-library/google-library.component';
import { GoogleDetailBookComponent } from './google-detail-book/google-detail-book.component';
import { GoogleListBooksComponent } from './google-list-books/google-list-books.component';


@NgModule({
  declarations: [BooksComponent, MockBooksComponent, GoogleLibraryComponent, GoogleDetailBookComponent, GoogleListBooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharingModule
  ]
})
export class BooksModule { }
