import signale from "signale";
import { VehiculeRespository } from "../domain/Vehicule.repository";


export class GetAllUseCase {

    constructor(readonly vehiculeRepository: VehiculeRespository){}

    async run() {
        try{
            const result:any = await this.vehiculeRepository.getAll()
            
            return result
        } catch (error){
            signale.error(error)
            return null
        }
        
    }
}