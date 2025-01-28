import { Request, Response } from "express";
import { GetAllUseCase } from "../../application/GetAllUseCase";

export class GetAllController {
    constructor (readonly getAllUseCase: GetAllUseCase){}

    async run (req: Request, res: Response) {
        try {

            const {userId} = req.params

            const goals = await this.getAllUseCase.run(userId)

            if (goals) {
                res.status(200).json({
                    success: true,
                    data: goals,
                    message: "metas obtenidas correctamente"
                })
            } else {
                res.status(500).json({
                    success: false,
                    data: null,
                    message: "no se pudo obtener las metas con exito"
                })
            }

        } catch(e) {
            res.status(500).json({
                success: false,
                data: null,
                message: "ocurrio un error en el servidor"
            })
        }
    }
}