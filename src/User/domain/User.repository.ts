import { User } from "./User";
import { UserBodyRequest } from "./UserBodyRequest";

export interface UserRepository {
    login(email: string, password: string): Promise<User | null>
    register(email: string, password: string, nickname: string): Promise<User | null>
}