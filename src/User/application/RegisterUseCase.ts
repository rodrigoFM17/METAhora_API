import signale from "signale";
import { UserRepository } from "../domain/User.repository";

export class RegisterUseCase {
    constructor ( readonly userRepository: UserRepository){}

    async run (email: string, password: string, nickname: string) {

        try {
            return await this.userRepository.register(email, password, nickname)
        } catch (e) {
            signale.error(e)
        }
    }
}