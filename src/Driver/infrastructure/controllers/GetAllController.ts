
import { GetAllUseCase } from "../../application/GetAllUseCase";
import { Request, Response } from "express";


export class GetAllController {

    constructor(readonly getAllUseCase: GetAllUseCase){}

    async run (req: Request, res: Response){
        
        try{

            const drivers = await this.getAllUseCase.run()

            drivers ?
            res.status(200).json({
                message: 'conductores obtenidos correctamente',
                drivers: drivers
            })
            : 
            res.status(204).json({
                message: 'ocurrio un error al intentar encontrar los usuarios',
            })
             

        }catch(error: any){

            res.status(500).json({
                message: 'ocurrio un error en el servidor',
                error: error.message
            })
        }
    }
}