import express from "express";
import { completeController, getAllController, getByIdController, registerController } from "./dependencies";
const router = express.Router()

router.get("/", getAllController.run.bind(getAllController))
router.get("/:id", getByIdController.run.bind(getByIdController))
router.post("/", registerController.run.bind(registerController))
router.patch("/:id", completeController.run.bind(completeController))

export default router
