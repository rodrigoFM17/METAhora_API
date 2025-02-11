import { Goal } from "./Goal";

export interface GoalRepository {
    getAll(user_id: string): Promise<Goal[] | null>
    getById(id: string): Promise<Goal | null>
    registerNew(
        id: string, 
        userId: string, 
        title: string, 
        description: string, 
        points: number,
        isPublic: boolean,
        end_date?: Date
    ): Promise<Goal | null>
    complete(id: Goal['id']): Promise<Goal | null>
}