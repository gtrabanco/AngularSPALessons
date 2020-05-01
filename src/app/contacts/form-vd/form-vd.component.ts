import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Group } from 'src/app/models/group';
import { Workgroup } from 'src/app/models/workgroup';
import { GROUPS, WORKGROUPS, HOBBIES } from 'src/app/models/constants.data';


@Component({
  selector: 'app-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {

  contact: Contact

  aGroups: Array<Group> = GROUPS
  aWorkgroups: Array<Workgroup> = WORKGROUPS
  aHobbies: Array<String> = HOBBIES

  constructor() { }

  ngOnInit(): void {
    this.contact = new Contact()
  }

  changeHobbies(event) {

    if (typeof this.contact.hobbies === 'undefined') {
      this.contact.hobbies = []
    }
    
    if(event.target.checked) {

      this.contact.hobbies.push(event.target.id)
    } else {

      this.contact.hobbies.splice(
        this.contact.hobbies.indexOf(event.target.id), 1
      )
    }
  }

  send(event) {
    console.log(event)
    console.info('Data sended')
  }
 }
