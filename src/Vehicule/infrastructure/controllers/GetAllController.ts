import signale from "signale";
import { GetAllUseCase } from "../../application/GetAllUseCase";
import { Request, Response } from "express";

export class GetAllController {

    constructor(readonly getAllUseCase: GetAllUseCase){}

    async run(req: Request, res: Response){

        try{

            const result = await this.getAllUseCase.run()

            result ?
            res.status(200).json({
                message: 'vehiculos obtenidos correctamente',
                vehicules: result
            })
            :
            res.status(200).json({
                message: 'ocurrio un error al obtener los vehiculos'
            })

        } catch(error: any){
            signale.error(error)
            res.status(500).json({
                message: 'hubo un error en el servidor',
                error: error.message
            })
        }   
    }
}