export class Quote {

    constructor(
        public id: number,
        public category: string,
        public quote: string,
        public author: string,
        public contributor: string,
        public date?: number //optional field

    ){}
}
