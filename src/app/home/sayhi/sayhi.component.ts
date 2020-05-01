import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sayhi',
  templateUrl: './sayhi.component.html',
  styleUrls: ['./sayhi.component.css']
})
export class SayhiComponent implements OnInit {

  user: string

  constructor() { }

  ngOnInit(): void {
    this.user = "Gabriel"
  }

  btnDelete(evn:Event): void {
    console.info(evn)
    this.user=""
  }

}
