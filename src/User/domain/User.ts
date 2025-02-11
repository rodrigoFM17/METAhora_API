export class User {
    constructor (
        readonly id: string,
        readonly nickname: string,
        readonly email: string,
        readonly password: string
    ) {}
}