import { EncryptService } from "./interfaces/EncryptService";
import bcrypt from "bcrypt"
import dotenv from 'dotenv'

dotenv.config()

export class BcryptEncryptService implements EncryptService {

    salt = parseInt(process.env.SALT || "10")

    hashPassword(password: string): string {
        const hashedPassword = bcrypt.hashSync(password, this.salt)
        return hashedPassword
    }

    verifyPassword(password: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(password, hashedPassword)
    }
}