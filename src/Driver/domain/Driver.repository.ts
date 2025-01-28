
import { Driver } from "./Driver";

export interface DriverRepository {

    getAll(): Promise<Driver[] | null> 
    getByCURP(CURP: string): Promise<Driver | null>
    registerDriver(
        CURP: string,
        name: string,
        numberLicense: string
    ): Promise<Driver | null>
}