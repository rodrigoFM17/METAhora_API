import { Vehicule } from "./Vehicule";

export interface VehiculeRespository{

    getAll(): Promise<Vehicule[] | null>
    getByEnrollment(enrollment: string): Promise<Vehicule | null>
    register(enrollment: string, ownerLicense: string): Promise<Vehicule | null>
}