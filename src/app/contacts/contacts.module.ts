import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FormVdComponent } from './form-vd/form-vd.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactsComponent, FormVdComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
