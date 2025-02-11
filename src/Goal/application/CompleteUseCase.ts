import signale from "signale";
import { Goal } from "../domain/Goal";
import { GoalRepository } from "../domain/Goal.repository";

export class CompleteUseCase {

    constructor (readonly goalRespository: GoalRepository){}

    async run(goalId: Goal['id']): Promise<Goal | null> {

        try {  

            const goalCompleted = await this.goalRespository.complete(goalId)
            return goalCompleted

        } catch (e: any) {
            signale.error(e.message)
            return null
        }
    }
}