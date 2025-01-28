import express from "express";
const router = express.Router()

import { getAllController, getByEnrollmentController, registerController } from "./dependencies";


router.get('/', getAllController.run.bind(getAllController))
router.get('/:enrollment', getByEnrollmentController.run.bind(getByEnrollmentController))
router.post('/', registerController.run.bind(registerController))

export default router