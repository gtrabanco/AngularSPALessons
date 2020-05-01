import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypipePipe } from '../mypipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleBooksService } from '../services/google-books.service';
import { GoogleBookObservableService } from '../services/google-book-observable.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MypipePipe
  ],
  exports: [
    CommonModule,
    MypipePipe,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    GoogleBooksService,
    GoogleBookObservableService
  ]
})
export class SharingModule {

}
