import { Request, Response } from "express";
import { RegisterUseCase } from "../../application/RegisterUseCase";

export class RegisterController {
    constructor( readonly registerUseCase: RegisterUseCase){}

    async run(req: Request, res: Response) {
        try {  
            const {email, nickname, password} = req.body

            const registeredUser = await this.registerUseCase.run(email, password, nickname)
            if (registeredUser) {
                res.status(201).json({
                    success: true,
                    data: registeredUser,
                    message: "usuario registrado con exito"
                })
            } else {
                res.status(500).json({
                    success: false,
                    data: null,
                    message: "ocurrio un error al intentar registrar el nuevo usuario"
                })
            }
        } catch (e) {
            res.status(500).json({
                success: false,
                data: null,
                message: "ocurrio un error en el servidor"
            })
        }
    }
}