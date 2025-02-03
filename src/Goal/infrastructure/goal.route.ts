import express from "express";
import { getAllController, getByIdController, registerController } from "./dependencies";
const router = express.Router()

router.get("/", getAllController.run.bind(getAllController))
router.get("/:id", getByIdController.run.bind(getByIdController))
router.post("/", registerController.run.bind(registerController))

export default router
