import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  template: `
  <div class="row">
    <app-mock-books class="col-6 mb-4"></app-mock-books>
    <app-google-library class="col-6 mb-4"></app-google-library>
    <app-google-list-books class="col-6 mb-4"></app-google-list-books>
  </div>
  `,
  styles: [
  ]
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
