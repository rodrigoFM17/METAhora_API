import { Request, Response } from "express";
import { GetByEnrollmentUseCase } from "../../application/GetByEnrollmentUseCase";
import signale from "signale";

export class GetByEnrollmentController{

    constructor(readonly getByEnrollmentUseCase: GetByEnrollmentUseCase ){}

    async run(req: Request, res: Response) {

        try{
            const enrollment = req.params.enrollment

            const vehicule = await this.getByEnrollmentUseCase.run(enrollment)

            vehicule ?
            res.status(200).json({
                message: 'vehiculo obtenido correctamente',
                vehicule,
            })
            :
            res.status(200).json({
                message: 'este vehiculo no esta registrado'
            })


        } catch (error: any){
            signale.error(error)
            res.status(500).json({
                message: 'ocurrio un error en el servidor al intentar obtener el vehiculo',
                error: error.message
            })
        }
    }
}