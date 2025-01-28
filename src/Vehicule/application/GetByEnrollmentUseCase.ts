import signale from "signale";
import { VehiculeRespository } from "../domain/Vehicule.repository";

export class GetByEnrollmentUseCase {

    constructor(readonly vehiculeRepository: VehiculeRespository){}

    async run(enrollment: string) {

        try{
            const vehicule = await this.vehiculeRepository.getByEnrollment(enrollment)
            return vehicule

        } catch (error){
            signale.error(error)
            return null
        }   
    }
}