import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { GoogleBookObservableService } from 'src/app/services/google-book-observable.service';

@Component({
  selector: 'app-google-list-books',
  templateUrl: './google-list-books.component.html',
  styleUrls: ['./google-list-books.component.css']
})
export class GoogleListBooksComponent implements OnInit {

  key:string
  aBooks:Array<Book>

  static lazyBooks:Array<Book>

  constructor(private booksService:GoogleBookObservableService) { }

  ngOnInit(): void {
    this.key = ''
    this.aBooks = []
  }


  async btnSearchRx() {
    this.aBooks = await this.booksService.getSearchBook(this.key)
    GoogleListBooksComponent.lazyBooks = this.aBooks;
  }

}
