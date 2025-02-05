import { Goal } from "../../Goal/domain/Goal";
import { User } from "./User";

export interface UserRepository {
    login(email: string, password: string): Promise<User[] | null>
    register(id:string, email: string, password: string, nickname: string): Promise<User[] | null>
    getGoalsByUserId(userId: string): Promise<Goal[] | null>
}