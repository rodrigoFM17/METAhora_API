import signale from "signale";
import { query } from "../../database/mysql";
import { GoalRepository } from "../domain/Goal.repository";
import { Goal } from "../domain/Goal";

export class MySQLYGoalRepository implements GoalRepository {

    async getAll(user_id: string): Promise<Goal[] | null> {
        try {
            const sqlQuery = "select * from goal where user_id = ?"
            const [result]: any = await query(sqlQuery, [user_id])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
    }

    async getById(id: string): Promise<Goal | null> {
        try {
            const sqlQuery = "select * from goal where id = ?"
            const [result]: any = await query(sqlQuery, [id])
            return result
        } catch (e) {
            signale.error(e)
            return null
        }
    }

    async registerNew(id:string, userId: string, title: string, description: string, points:number, isPublic: boolean, end_date?: Date): Promise<Goal | null> {
        try {

            if (end_date) {
                const sqlQuery = "insert into goal_date (goal_id, end_date) values (?, ?)"
                await query(sqlQuery, [id, end_date])
            }
            
            const sqlQuery = "insert into goal (id, user_id, title, description, points, state_id, public, created_at) values (?, ?, ?, ?, ?, ?, ?, ?)"
            await query(sqlQuery, [id, userId, title, description, points, 2, isPublic, new Date()])
            
            const sqlQuery2 = "select * from goal where id = ?"
            const [result] : any = await query(sqlQuery2, [id])

            return result
        } catch (e) {
            signale.error(e)
            return null
        }
        
    }
}