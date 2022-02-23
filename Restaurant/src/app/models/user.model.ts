export class User{
    constructor (
        public email: string, 
        public role: number,  // 0 - reader, 1 - manager, 2 - admin
        public uid?: string,
        public $key?: string) { }
}

