export class Quote {
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public user: string,
        public createdAt: Date,
        public upvotes: number,
        public downvotes: number) {
    }
}


