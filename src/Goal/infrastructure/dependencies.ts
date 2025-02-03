import { NodeCryptoUUIDService } from "../../services/NodeCryptoUUIDService";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { GetByIdUseCase } from "../application/GetByIdUseCase";
import { RegisterUseCase } from "../application/RegisterUseCase";
import { GetAllController } from "./controllers/GetAllController";
import { GetByIdController } from "./controllers/GetByIdController";
import { RegisterController } from "./controllers/RegisterController";
import { MySQLYGoalRepository } from "./MySQLGoalRepository";

const mySQLGoalRepository = new MySQLYGoalRepository()
const nodeCryptoUUIDService = new NodeCryptoUUIDService()

const registerUseCase = new RegisterUseCase(mySQLGoalRepository, nodeCryptoUUIDService)
export const registerController = new RegisterController(registerUseCase)

const getAllUseCase = new GetAllUseCase(mySQLGoalRepository)
export const getAllController = new GetAllController(getAllUseCase)

const getByIdUseCase = new GetByIdUseCase(mySQLGoalRepository)
export const getByIdController = new GetByIdController(getByIdUseCase)