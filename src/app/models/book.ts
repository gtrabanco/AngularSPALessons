export class Book {
    constructor(public id:string,
        public authors: Array<string>,
        public title: string,
        public pages:number,
        public image?:string,
        public description?:string
    ) {}
}
