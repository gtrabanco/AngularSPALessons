import { Group } from './group'
import { Workgroup } from './workgroup'

export const GROUPS: Array<Group> = [
    {id: 1, name: 'Familia', description: ''},
    {id: 2, name: 'Amigos', description: ''},
    {id: 3, name: 'Negocios', description: ''},
    {id: 4, name: 'Trabajo', description: ''},
    {id: 5, name: 'Otros', description: ''}
]

export const WORKGROUPS: Array<Workgroup> = [
    {id: 1, name: 'Técnico', description: ''},
    {id: 2, name: 'Creativo', description: ''},
    {id: 3, name: 'Comercial', description: ''},
    {id: 4, name: 'Otros', description: ''}
]


export const HOBBIES: Array<String> = [
    'Deportes', 'Informática', 'Viajar', 'Ajedrez'
]