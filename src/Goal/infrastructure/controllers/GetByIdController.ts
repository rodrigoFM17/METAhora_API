import { GetByIdUseCase } from "../../application/GetByIdUseCase";
import { Request, Response } from "express";

export class GetByIdController {
    constructor (readonly getByIdUseCase: GetByIdUseCase){}

    async run (req: Request, res: Response) {
        try {
            const {id} = req.params
            const goal = await this.getByIdUseCase.run(id)

            if (goal) {
                res.status(200).json({
                    success: true,
                    data: goal,
                    message: `meta con id ${id} obtenida correctamente`
                })
            } else {
                res.status(404).json({
                    success: false,
                    data: null,
                    message: `no se pudo obtener la meta con el id ${id}`
                })
            }

        } catch (e) {
            res.status(500).json({
                success: false,
                data: null,
                message: "ocurrio un error en el servidor al intentar obtener la meta"
            })
        }
    }
}