import { Request, Response } from "express";
import { CompleteUseCase } from "../../application/CompleteUseCase";

export class CompleteController {

    constructor (readonly completeUseCase: CompleteUseCase) {}

    async run (req: Request, res: Response) {

        try {

            const {id} = req.params

            const goalCompleted = await this.completeUseCase.run(id)

            if(goalCompleted){
                res.status(200).json({
                    succes: true,
                    data: goalCompleted,
                    message: "meta actualizada con el estado completado"
                })
            } else {
                res.status(404).json({
                    success: false,
                    data: null,
                    message: "no se encontro la meta que se intenta completar"
                })
            }

        } catch (e:any) {
            res.status(500).json({
                success: false,
                data: null,
                message: "ocurrio un error en el servidor" + e.message
            })
        }

    }
}