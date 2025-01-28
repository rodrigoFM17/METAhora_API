import { GetAllUseCase } from "../application/GetAllUseCase";
import { GetByCURPUseCase } from "../application/GetByCURPUseCase";
import { RegisterUseCase } from "../application/RegisterUseCase";
import { MySQLDriverRespository } from "./MySQLDriverRepository";
import { GetAllController } from "./controllers/GetAllController";
import { GetByCURPController } from "./controllers/GetByCURPController";
import { RegisterController } from "./controllers/RegisterController";


//implementacion de MySQL al driver repository
const mySQLDriverRespository = new MySQLDriverRespository()


const getAllUseCase = new GetAllUseCase(mySQLDriverRespository)

export const getAllController = new GetAllController(getAllUseCase)


const getByCURPUseCase = new GetByCURPUseCase(mySQLDriverRespository)

export const getByCURPController = new GetByCURPController(getByCURPUseCase)


const registerUseCase = new RegisterUseCase(mySQLDriverRespository)

export const registerController = new RegisterController(registerUseCase) 