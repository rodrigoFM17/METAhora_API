import { NodeCryptoUUIDService } from "../../services/NodeCryptoUUIDService";
import { LoginUseCase } from "../application/LoginUseCase";
import { RegisterUseCase } from "../application/RegisterUseCase";
import { LoginControllers } from "./controllers/LoginController";
import { RegisterController } from "./controllers/RegisterController";
import { MySQLYUserRepository } from "./MySQLUserRepository";

const mySQLUserRepository = new MySQLYUserRepository()
const nodeCryptoUUIDService = new NodeCryptoUUIDService()
const registerUseCase = new RegisterUseCase(mySQLUserRepository, nodeCryptoUUIDService)
export const registerController = new RegisterController(registerUseCase)

const loginUseCase = new LoginUseCase(mySQLUserRepository)
export const loginController = new LoginControllers(loginUseCase)