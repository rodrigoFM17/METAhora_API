import signale from "signale";
import { query } from "../../database/mysql";
import { Vehicule } from "../domain/Vehicule";
import { VehiculeRespository } from "../domain/Vehicule.repository";


export class MySQLVehiculeRepository implements VehiculeRespository{
    
    async getAll(): Promise<Vehicule[] | null> {

        try{
            const sqlQuery = "select * from vehicules"

            const [result]: any = await query(sqlQuery, [])

            return result
        } catch(error:any){
            signale.error(error)
            return null
        }
    }

    async getByEnrollment(enrollment: string): Promise<Vehicule | null> {

        try{

            const sqlQuery = 'select * from vehicules where enrollment = ?'

            const [result]:any = await query(sqlQuery, [enrollment])

            return result[0]
        }catch(error) {
            signale.error(error)
            return null
        }
    }

    async register(enrollment: string, ownerLicense: string): Promise<Vehicule | null> {

        try{
            const sqlQuery = 'insert into vehicules (enrollment, ownerLicense) values (?, ?)'

            await query(sqlQuery, [enrollment, ownerLicense])

            return new Vehicule(enrollment, ownerLicense)
        } catch (error){
            signale.error(error)
            return null
        }
        
    }
}