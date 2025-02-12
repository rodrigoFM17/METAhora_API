import signale from "signale";
import { UserRepository } from "../domain/User.repository";
import { EncryptService } from "../../services/interfaces/EncryptService";
import { User } from "../domain/User";

export class LoginUseCase {

    constructor( readonly userRepository: UserRepository, readonly encryptService: EncryptService){}

    async run (email: string, password: string): Promise<User[] | null> {
        try{
            const userLogged = await this.userRepository.login(email)
            if (userLogged && this.encryptService.verifyPassword(password, userLogged[0].password)) {
                return userLogged
            }
            return null
        } catch (e) {
            signale.error(e)
            return null
        }
    }
}