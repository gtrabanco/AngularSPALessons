import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public title: string

  constructor() { }

  ngOnInit(): void {
    //this.title = this.title ? this.title: "Default head title"
    this.title = "Library and more SPA"
  }

}
