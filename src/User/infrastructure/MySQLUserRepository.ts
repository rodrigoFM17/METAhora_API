import signale from "signale";
import { User } from "../domain/User";
import { UserRepository } from "../domain/User.repository";
import { query } from "../../database/mysql";

export class MySQLYUserRepository implements UserRepository {

    async login(email: string, password: string): Promise<User | null> {
        try {
            const sqlQuery = "s"
            const [result]: any = await query(sqlQuery, [])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
        
    }

    async register(email: string, password: string, nickname: string): Promise<User | null> {
        try {
            const sqlQuery = "s"
            const [result]: any = await query(sqlQuery, [])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
        
    }
}