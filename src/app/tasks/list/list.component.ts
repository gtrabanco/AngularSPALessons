import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() aItems: Array<string>
  
  @Output() evtDelete: EventEmitter<number>

  samplepipe = 'my piped text with no of args: '

  constructor() {
    this.evtDelete = new EventEmitter()
  }

  ngOnInit(): void {
  }


  btnDelete(index:number) {
    this.evtDelete.emit(index)
  }

}
