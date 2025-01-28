import { GoalRepository } from "../domain/Goal.repository";

export class RegisterUseCase {
    constructor (readonly goalRepository: GoalRepository) {}

    async run (id: string, title: string, description: string, end_date?: Date) {
        try {
            return await this.goalRepository.registerNew(id, title, description, end_date)
        } catch(e) {
            signale.error(e)
            return null
        }
    }
}