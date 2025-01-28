import { Driver } from "../domain/Driver";
import { DriverRepository } from "../domain/Driver.repository";

export class RegisterUseCase{

    constructor(readonly driverRepository: DriverRepository){}

    async run (CURP: string, name: string, numberLicense: string){

        try{

            await this.driverRepository.registerDriver(CURP, name, numberLicense)
            return new Driver( CURP, name, numberLicense)

        } catch (error){

            return null
        }

        

    }
}