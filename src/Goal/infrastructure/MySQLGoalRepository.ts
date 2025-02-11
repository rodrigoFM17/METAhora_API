import signale from "signale";
import { query } from "../../database/mysql";
import { GoalRepository } from "../domain/Goal.repository";
import { Goal } from "../domain/Goal";

export class MySQLYGoalRepository implements GoalRepository {

    async getAll(user_id: string): Promise<Goal[] | null> {
        try {
            const sqlQuery = "select * from goal inner join state on goal.state_id = state.id where user_id = ?"
            const [result]: any = await query(sqlQuery, [user_id])
            console.log(result)
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

    async registerNew(id:string, userId: string, title: string, description: string, points:number = 0, isPublic: boolean = false, end_date?: Date): Promise<Goal | null> {
        try {
            console.log(id, userId, title, description, points, isPublic, end_date)

            if (end_date != undefined) {
                const sqlQuery = "insert into goal_date (goal_id, end_date) values (?, ?)"
                await query(sqlQuery, [id, end_date])
            }
            
            const sqlQuery = "insert into goal (id, user_id, title, description, points, state_id, public, created_at) values (?, ?, ?, ?, ?, ?, ?, ?)"
            await query(sqlQuery, [id, userId, title, description, points, 2, isPublic, new Date()])
            
            const sqlQuery2 = "select * from goal where id = ?"
            const [result] : any = await query(sqlQuery2, [id])

            return result.length > 0 ? result : null
        } catch (e) {
            signale.error(e)
            return null
        }
        
    }

    async complete(id: Goal["id"]): Promise<Goal | null> {
        try {
            console.log(id)

            const sqlQuery1 = "select * from goal where id = ?"
            const [goal] : any = await query(sqlQuery1, [id])
            if (goal.length == 0) {
                return null
            }
            
            const sqlQuery = "update goal set state_id = ? where id = ? "
            await query(sqlQuery, [1, id])
            return goal

            
        } catch (e) {
            signale.error(e)
            return null
        }
        
    }
}