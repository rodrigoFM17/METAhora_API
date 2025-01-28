import signale from "signale";
import { VehiculeRespository } from "../domain/Vehicule.repository";


export class RegisterUseCase {

    constructor(readonly vehiculeRepository: VehiculeRespository){}

    async run (enrollment: string, ownerLicense: string){

        try{
            const addedVehicule = await this.vehiculeRepository.register(enrollment, ownerLicense)

            return addedVehicule

        } catch (error){
            signale.error(error)
            return null
        }
    }
}