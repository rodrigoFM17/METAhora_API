
import { GetAllUseCase } from "../application/GetAllUseCase";
import { GetByEnrollmentUseCase } from "../application/GetByEnrollmentUseCase";
import { RegisterUseCase } from "../application/RegisterUseCase";
import { MySQLVehiculeRepository } from "./MySQLVehiculeRepository";
import { GetAllController } from "./controllers/GetAllController";
import { GetByEnrollmentController } from "./controllers/GetByEnrollmentController";
import { RegisterController } from "./controllers/RegisterController";

const mySQLVehiculeRepository = new MySQLVehiculeRepository

const getAllUseCase = new GetAllUseCase(mySQLVehiculeRepository)
export const getAllController = new GetAllController(getAllUseCase) 

const getByEnrollmentUseCase = new GetByEnrollmentUseCase(mySQLVehiculeRepository)
export const getByEnrollmentController = new GetByEnrollmentController(getByEnrollmentUseCase)

const registerUseCase = new RegisterUseCase(mySQLVehiculeRepository)
export const registerController = new RegisterController(registerUseCase)