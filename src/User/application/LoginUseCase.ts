import signale from "signale";
import { UserRepository } from "../domain/User.repository";

export class LoginUseCase {

    constructor( readonly userRepository: UserRepository){}

    async run (email: string, password: string){
        try{
            const userLogged = await this.userRepository.login(email, password)
            return userLogged
        } catch (e) {
            signale.error(e)
        }
    }
}