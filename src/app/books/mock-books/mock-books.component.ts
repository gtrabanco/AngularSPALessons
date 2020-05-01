import { Component, OnInit } from '@angular/core';
import { MockBookService } from 'src/app/services/mock-book.service';

@Component({
  selector: 'app-mock-books',
  templateUrl: './mock-books.component.html',
  styleUrls: ['./mock-books.component.css'],
  providers: [MockBookService]
})
export class MockBooksComponent implements OnInit {

  key:string
  aBooks: Array<string>

  constructor(public books:MockBookService) { }

  ngOnInit(): void {
    this.key = ''
    this.aBooks = []
  }

  btnSearch() {
    this.aBooks = this.books.getBooks(this.key)
  }

  btnSearchRx() {

    this.books.getBooks$(this.key).subscribe(
      (response: Array<string>) => {
        this.aBooks=response
    })
    
  }

}
