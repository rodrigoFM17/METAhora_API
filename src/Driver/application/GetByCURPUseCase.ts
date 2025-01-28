import signale from "signale";
import { DriverRepository } from "../domain/Driver.repository";
import { Driver } from "../domain/Driver";

export class GetByCURPUseCase{

    constructor(readonly driverRepository: DriverRepository){}

    async run (CURP: string): Promise<Driver | null> {

        try{
            const result = await this.driverRepository.getByCURP(CURP)
            return result

        } catch(error) {
            
            return null
        }
    }

}