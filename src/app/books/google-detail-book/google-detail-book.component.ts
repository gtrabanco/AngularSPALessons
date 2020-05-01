import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GoogleBookObservableService } from 'src/app/services/google-book-observable.service';
import { GoogleListBooksComponent } from '../google-list-books/google-list-books.component';

@Component({
  selector: 'app-google-detail-book',
  templateUrl: './google-detail-book.component.html',
  styleUrls: ['./google-detail-book.component.css']
})
export class GoogleDetailBookComponent implements OnInit {

  id:string
  book:Book
  get alt(): string {
    return this.book.title + ' - ' + this.book.authors.join(', ')
  }

  get authors():string {
    return this.book.authors.join(', ')
  }

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private books:GoogleBookObservableService) { }

  ngOnInit(): void {
    //*/ 
    this.id = this.activatedRouter.snapshot.params['id']
    //*/

    console.log(this.books.aBooks)

    if (!this.id) {
      this.gotoBooks()
    }

    this.book = GoogleListBooksComponent.lazyBooks.find((book:Book) => book.id === this.id)

    if (!(this.book)) {
      this.book = new Book('', ['none'], 'none', 0)
    }
  }

  gotoBooks() {
    //this.router.navigateByUrl('/books')
    this.router.navigate(['/books'])
  }
}
