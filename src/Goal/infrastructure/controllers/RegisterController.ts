import { Request, Response } from "express";
import { RegisterUseCase } from "../../application/RegisterUseCase";

export class RegisterController {

    constructor (readonly registerUseCase: RegisterUseCase){}

    async run(req: Request, res: Response) {
        try {
            const {userId, title, description, end_date, points, isPublic} = req.body

            const registeredGoal = await this.registerUseCase.run(userId, title, description, points, isPublic, end_date)

            if(registeredGoal) {
                res.status(201).json({
                    success: true,
                    data: registeredGoal,
                    message: "nueva meta registrada con exito"
                })
            } else {
                res.status(500).json({
                    success: false,
                    data: null,
                    messsage: "ocurrio un error al intentar registrar la nueva meta"
                })
            }

        } catch (e) {
            res.status(500).json({
                success: false,
                data: null,
                message: "ocurio un error en el servidor" + e
            })
        }
    }
}