import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
  <div class="row">
    <app-form-vd class="col"></app-form-vd>
  </div>
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
