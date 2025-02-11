import signale from "signale";
import { UserRepository } from "../domain/User.repository";
import { IUUIDService } from "../../services/interfaces/IUUIDService";
import { EncryptService } from "../../services/interfaces/EncryptService";

export class RegisterUseCase {
    constructor ( readonly userRepository: UserRepository, readonly UUIDService: IUUIDService, readonly encryptService: EncryptService){}

    async run (email: string, password: string, nickname: string) {

        try {
            const newId = this.UUIDService.generateUUID()
            const hashedPassword = this.encryptService.hashPassword(password)

            return await this.userRepository.register(newId, email, hashedPassword, nickname)
        } catch (e) {
            signale.error(e)
        }
    }
}