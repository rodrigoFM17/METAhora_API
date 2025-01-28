import signale from "signale";
import { query } from "../../database/mysql";
import { GoalRepository } from "../domain/Goal.repository";
import { Goal } from "../domain/Goal";

export class MySQLYGoalRepository implements GoalRepository {

    async getAll(user_id: string): Promise<Goal[] | null> {
        try {
            const sqlQuery = "s"
            const [result]: any = await query(sqlQuery, [])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
    }

    async getById(id: string): Promise<Goal | null> {
        try {
            const sqlQuery = "s"
            const [result]: any = await query(sqlQuery, [])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
    }

    async registerNew(id: string, title: string, description: string, end_date?: Date): Promise<Goal | null> {
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