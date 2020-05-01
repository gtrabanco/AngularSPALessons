import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="row">
    <app-task-control class="col"></app-task-control> 
    </div>
  `,
  styles: [
  ]
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
