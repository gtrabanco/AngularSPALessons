import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SayhiComponent } from './sayhi/sayhi.component';
import { FormsModule } from '@angular/forms';
import { RefsComponent } from './refs/refs.component';



@NgModule({
  declarations: [HomeComponent, SayhiComponent, RefsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
