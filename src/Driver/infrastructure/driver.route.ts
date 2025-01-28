import express from 'express'
const router = express.Router()

import { getAllController, registerController } from './dependencies'
import { getByCURPController } from './dependencies'


router.get('/', getAllController.run.bind(getAllController))
router.get('/:CURP', getByCURPController.run.bind(getByCURPController))
router.post('/', registerController.run.bind(registerController))

export default router