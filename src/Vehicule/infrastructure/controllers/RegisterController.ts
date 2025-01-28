import { Request, Response } from "express";
import { RegisterUseCase } from "../../application/RegisterUseCase";
import signale from "signale";

export class RegisterController{

    constructor(readonly registerUseCase: RegisterUseCase){}

    async run(req: Request, res: Response){

        try{
            const {enrollment, numberLicense} = req.body
    
            const addedVehicule = await this.registerUseCase.run(enrollment, numberLicense)

            addedVehicule ?
            res.status(200).json({
                message: 'vehiculo registrado correctamente',
                vehicule: addedVehicule
            })
            :
            res.status(200).json({
                messsage: 'ha ocurrido un error al momento de registrar el vehiculo'
            })
            
        } catch(error: any){

            signale.error(error)
            res.status(500).json({
                message: 'hubo un error en el servidor al intentar registrar el vehiculo',
                error: error.message
            })
        }
    }
}