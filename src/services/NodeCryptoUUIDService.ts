import { IUUIDService } from "./interfaces/IUUIDService";
import { randomUUID } from "crypto"

export class NodeCryptoUUIDService implements IUUIDService {

    generateUUID(): string {
        return randomUUID()
    }
}