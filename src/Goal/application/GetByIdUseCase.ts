import signale from "signale";
import { GoalRepository } from "../domain/Goal.repository";

export class GetByIdUseCase {
    constructor (readonly goalRepository: GoalRepository){}

    async run (goalId: string){
        try {
            return await this.goalRepository.getById(goalId)
        } catch (e) {
            signale.error(e)
            return null
        }
    }
}