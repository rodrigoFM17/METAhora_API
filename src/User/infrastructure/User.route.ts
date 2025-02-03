import express from "express";
import { loginController, registerController } from "./dependencies";
const router = express.Router()

router.post('/', registerController.run.bind(registerController))
router.post("/auth", loginController.run.bind(loginController))

export default router