import { Group } from './group'
import { Workgroup } from './workgroup'

export class Contact {
    id: string
    name: string
    lastName: string
    email: string
    phoneNumber: string
    group: Group
    workGroup: Workgroup
    hobbies: Array<string> // = []

    constructor() {
        //this.hobbies = []
    }
}
