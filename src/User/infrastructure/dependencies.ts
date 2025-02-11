import { BcryptEncryptService } from "../../services/BcryptEncryptService";
import { NodeCryptoUUIDService } from "../../services/NodeCryptoUUIDService";
import { GetGoalsByUserIdUseCase } from "../application/GetGoalsByUserIdUseCase";
import { LoginUseCase } from "../application/LoginUseCase";
import { RegisterUseCase } from "../application/RegisterUseCase";
import { GetGoalsByUserIdController } from "./controllers/GetGoalsByUserIdController";
import { LoginControllers } from "./controllers/LoginController";
import { RegisterController } from "./controllers/RegisterController";
import { MySQLYUserRepository } from "./MySQLUserRepository";

const mySQLUserRepository = new MySQLYUserRepository()
const nodeCryptoUUIDService = new NodeCryptoUUIDService()
const bcryptEncryptService = new BcryptEncryptService()

const registerUseCase = new RegisterUseCase(mySQLUserRepository, nodeCryptoUUIDService, bcryptEncryptService)
export const registerController = new RegisterController(registerUseCase)

const loginUseCase = new LoginUseCase(mySQLUserRepository, bcryptEncryptService)
export const loginController = new LoginControllers(loginUseCase)

const getGoalsByUserIdUseCase = new GetGoalsByUserIdUseCase(mySQLUserRepository)
export const getGoalsByUserIdController = new GetGoalsByUserIdController(getGoalsByUserIdUseCase)