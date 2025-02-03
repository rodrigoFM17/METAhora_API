import signale from "signale";
import { UserRepository } from "../domain/User.repository";
import { IUUIDService } from "../../services/interfaces/IUUIDService";

export class RegisterUseCase {
    constructor ( readonly userRepository: UserRepository, readonly UUIDService: IUUIDService){}

    async run (email: string, password: string, nickname: string) {

        try {
            const newId = this.UUIDService.generateUUID()
            return await this.userRepository.register(newId, email, password, nickname)
        } catch (e) {
            signale.error(e)
        }
    }
}