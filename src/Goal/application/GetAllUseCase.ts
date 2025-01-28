import { GoalRepository } from "../domain/Goal.repository";

export class GetAllUseCase {

    constructor (readonly goalRepository: GoalRepository){}

    async run (userId: string) {
        try {
            return await this.goalRepository.getAll(userId)
        }catch(e) {
            signale.error(e)
            return null
        }
    }
}