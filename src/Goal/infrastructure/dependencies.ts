import { GetAllUseCase } from "../application/GetAllUseCase";
import { RegisterUseCase } from "../application/RegisterUseCase";
import { GetAllController } from "./controllers/GetAllController";
import { RegisterController } from "./controllers/RegisterController";
import { MySQLYGoalRepository } from "./MySQLGoalRepository";

const mySQLUserRepository = new MySQLYGoalRepository()

const registerUseCase = new RegisterUseCase(mySQLUserRepository)
export const registerController = new RegisterController(registerUseCase)

const getAllUseCase = new GetAllUseCase(mySQLUserRepository)
export const getAllController = new GetAllController(getAllUseCase)