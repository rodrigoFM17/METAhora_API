import { Driver } from "../domain/Driver";
import { DriverRepository } from "../domain/Driver.repository";
import { query } from "../../database/mysql";
import signale from "signale";

export class MySQLDriverRespository implements DriverRepository {

    async getAll(): Promise<Driver[] | null> {

        try{

            const sqlQuery = "select * from drivers"

            const [result]: any = await query(sqlQuery, [])

            return result

        } catch (error){
            signale.error(error)
            return null
        }
    }

    async getByCURP(CURP: string): Promise<Driver | null> {

        try{

            const sqlQuery = "select * from drivers where CURP = ?"

            const [result]:any = await query(sqlQuery, [CURP]) 

            return new Driver(
                result[0].CURP,
                result[0].name,
                result[0].numberLicense
            )

        }catch (error){
            
            return null
        }
        
    }

    async registerDriver(CURP: string, name: string, numberLicense: string): Promise<Driver | null> {
        const sqlQuery = "insert into drivers (CURP, name, numberLicense) values (?,?,?)"

        try{

            await query(sqlQuery, [CURP, name, numberLicense])

            return new Driver(CURP, name, numberLicense)

        }catch (error) {
            signale.error(error)
            return null
        }
    }


}