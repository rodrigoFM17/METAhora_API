import signale from "signale";
import { User } from "../domain/User";
import { UserRepository } from "../domain/User.repository";
import { query } from "../../database/mysql";
import { Goal } from "../../Goal/domain/Goal";

export class MySQLYUserRepository implements UserRepository {

    async login(email: string): Promise<User[] | null> {
        try {
            const sqlQuery = "select * from user where email = ? "
            const [result]: any = await query(sqlQuery, [email])
            return result.length > 0 ? result : null
        } catch (e) {
            signale.error(e)
            return null
        }
        
    }

    async register(id:string, email: string, password: string, nickname: string): Promise<User[] | null> {
        try {
            const sqlQuery = "insert into user (id, nickname, email, password, created_at) values (?, ?, ?, ?, ?)"
            const [result]: any = await query(sqlQuery, [id, nickname, email, password, new Date()])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
        
    }

    async getGoalsByUserId(userId: string): Promise<Goal[] | null> {
        try {
            const sqlQuery = "select * from goal inner join state on goal.state_id = state.id where user_id = ?"
            const [result]: any = await query(sqlQuery, [userId])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
    }
}