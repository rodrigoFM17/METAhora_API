import { RegisterUseCase } from "../../application/RegisterUseCase";
import { Request, Response } from "express";
import { Driver } from "../../domain/Driver";
import signale from "signale";

export class RegisterController{

    constructor(readonly registerUseCase: RegisterUseCase){}

    async run(req: Request, res: Response){

        try{

            const {CURP, name, numberLicense} = req.body

            await this.registerUseCase.run(CURP, name, numberLicense)

            const newDriver = new Driver(CURP, name, numberLicense)

            res.status(201).json({
                message: 'conductor agregado con exito',
                driver: newDriver
            })

        } catch (error: any) {

            signale.error(error)
            res.status(500).json({
                message: 'hubo un error al registrar el conductor',
                error: error.message
            })
        }
        
    }
}