import { Goal } from "./Goal";

export interface GoalRepository {
    getAll(user_id: string): Promise<Goal[] | null>
    getById(id: string): Promise<Goal | null>
    registerNew(id: string, title: string, description: string, end_date?: Date): Promise<Goal | null>
}