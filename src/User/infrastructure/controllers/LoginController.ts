import { Request, Response } from "express";
import { LoginUseCase } from "../../application/LoginUseCase";

export class LoginControllers {

    constructor( readonly loginUseCase: LoginUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const {email, password} = req.body

            const userLogged = await this.loginUseCase.run(email, password)
            if (userLogged) {
                res.status(200).json({
                    success: true,
                    data: userLogged,
                    message: "inicio de sesion con exito"
                })
            } else {
                res.status(404).json({
                    succes: false,
                    data: null,
                    message: "no existe un usuario para estas credenciales"
                })
            }
        } catch(e: any) {
            res.status(500).json({
                success: false,
                data: null,
                message: 'ocurrio un error en el servidor ' + e.message
            })
        }

    }
}