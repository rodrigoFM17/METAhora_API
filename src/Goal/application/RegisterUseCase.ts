import signale from "signale";
import { GoalRepository } from "../domain/Goal.repository";
import { IUUIDService } from "../../services/interfaces/IUUIDService";
import { EncryptService } from "../../services/interfaces/EncryptService";

export class RegisterUseCase {
    constructor (readonly goalRepository: GoalRepository, readonly UUIDService: IUUIDService, ) {}

    async run (userId:string, title: string, description: string, points:number, isPublic: boolean, end_date?: Date) {
        try {
            const newId = this.UUIDService.generateUUID()
            return await this.goalRepository.registerNew(newId, userId, title, description, points, isPublic, end_date)
        } catch(e) {
            signale.error(e)
            return null
        }
    }
}