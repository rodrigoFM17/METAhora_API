import signale from "signale";
import { UserRepository } from "../domain/User.repository";

export class GetGoalsByUserIdUseCase {

    constructor (readonly userRepository: UserRepository) {}

    async run (userId: string) {

        try {
            const goals = await this.userRepository.getGoalsByUserId(userId)
            return goals
        } catch (e: any ) {
            signale.error(e)
            return null
        }
    } 
}