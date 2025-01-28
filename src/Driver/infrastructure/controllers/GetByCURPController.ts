import { GetByCURPUseCase } from "../../application/GetByCURPUseCase";
import { Request, Response } from "express";

export class GetByCURPController {

    constructor(readonly getByCURPUseCase: GetByCURPUseCase){}

    async run(req: Request, res: Response){

        const CURP = req.params.CURP
        
        try{

            const driver = await this.getByCURPUseCase.run(CURP)
            
            driver ?
            res.status(200).json({
                message: "conductor encontrado correctamente",
                driver: driver
            })
            :
            res.status(200).json({
                message: 'esta CURP no esta registrada',
                
            })

        } catch (error: any){
            res.status(500).json({
                message: 'ocurrio un error al intentar encontrar el conductor',
                error: error.message
            })
        }
        
    }
}