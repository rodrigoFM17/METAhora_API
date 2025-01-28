
export class Goal {

    constructor(
        readonly id: string,
        readonly title: string,
        readonly description: string,
        readonly state: string,
        readonly endDate?: Date
    ){}
}