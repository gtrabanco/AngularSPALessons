import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from 'src/app/services/google-books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-google-library',
  templateUrl: './google-library.component.html',
  styleUrls: ['./google-library.component.css']
})
export class GoogleLibraryComponent implements OnInit {

  aBooks:Array<Book>
  key:string

  constructor(private booksService:GoogleBooksService) { }

  ngOnInit(): void {

    this.aBooks = []
    this.key = ''
  }

  btnSearchRx() {
    
    this.aBooks = []

    this.booksService.getSearchBook(this.key).subscribe(
      (books: Array<Book>) => 
        this.aBooks = books
    )

    this.key = ''
  }
}
