import express from "express";
import { getGoalsByUserIdController, loginController, registerController } from "./dependencies";
const router = express.Router()

router.post('/', registerController.run.bind(registerController))
router.post("/auth", loginController.run.bind(loginController))
router.get("/:userId/goals", getGoalsByUserIdController.run.bind(getGoalsByUserIdController))

export default router