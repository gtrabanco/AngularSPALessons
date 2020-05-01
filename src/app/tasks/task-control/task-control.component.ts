import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-control',
  templateUrl: './task-control.component.html',
  styleUrls: ['./task-control.component.css']
})
export class TaskControlComponent implements OnInit {

  aTasks: Array<string>

  constructor() { }

  ngOnInit(): void {

    this.aTasks = []
  }

  addTask(task) {
    this.aTasks.push(task)
  }

  deleteTask(index:number) {
    this.aTasks.splice(index, 1)
  }
}
