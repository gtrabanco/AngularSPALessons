import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "tasks", loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)},
  {path: "books", loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  {path: "library", redirectTo: "books"},
  {path: "contacts", loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
  //{path: "**", component: HomeComponent}, //404?
  {path: "", pathMatch: 'full', redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
