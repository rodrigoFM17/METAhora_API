import signale from "signale"
import { Driver } from "../domain/Driver"
import { DriverRepository } from "../domain/Driver.repository"

export class GetAllUseCase {

    constructor(readonly driverRepository: DriverRepository){}

    async run(): Promise<Driver[] | null> {
        try{

            const drivers = await this.driverRepository.getAll()
            return drivers
            
        } catch(error){
            signale.error(error)
            return null
        }
    }   

}