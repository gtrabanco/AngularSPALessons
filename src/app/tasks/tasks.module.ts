import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskControlComponent } from './task-control/task-control.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { SharingModule } from '../sharing/sharing.module';


@NgModule({
  declarations: [TasksComponent, TaskControlComponent, ItemComponent, ListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharingModule
  ]
})
export class TasksModule { }
