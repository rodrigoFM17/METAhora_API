import { Request, Response } from "express";
import { GetGoalsByUserIdUseCase } from "../../application/GetGoalsByUserIdUseCase";

export class GetGoalsByUserIdController {

    constructor (readonly getGoalsByUserIdUseCase: GetGoalsByUserIdUseCase) {}

    async run(req: Request, res: Response) {
        try {

            const {userId} = req.params

            const goals = await this.getGoalsByUserIdUseCase.run(userId)

            if (goals) {
                res.status(200).json({
                    message: "metas del usuario con el id " + userId + " obtenidas correctamente",
                    data: goals,
                    success: true
                })
            } else {
                res.status(404).json({
                    success: false,
                    data: null,
                    message: "ocurrio un error al intentar obtener las metas"
                })
            }

        } catch (e: any) {
            res.status(500).json({
                success: false,
                data: null,
                message: "ocurrio un error en el servidor" + e
            })
        }
    }
}