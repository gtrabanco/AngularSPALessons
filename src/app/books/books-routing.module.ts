import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { GoogleDetailBookComponent } from './google-detail-book/google-detail-book.component';


const routes: Routes = [
  { path: "book/:id", component: GoogleDetailBookComponent},
  { path: "", component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
