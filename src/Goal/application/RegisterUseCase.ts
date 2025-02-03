import signale from "signale";
import { GoalRepository } from "../domain/Goal.repository";
import { IUUIDService } from "../../services/interfaces/IUUIDService";

export class RegisterUseCase {
    constructor (readonly goalRepository: GoalRepository, readonly UUIDService: IUUIDService) {}

    async run (title: string, description: string, end_date?: Date) {
        try {
            const newId = this.UUIDService.generateUUID()
            return await this.goalRepository.registerNew(newId, title, description, end_date)
        } catch(e) {
            signale.error(e)
            return null
        }
    }
}