
export interface EncryptService {
    hashPassword(password: string) : string
    verifyPassword(password: string, hashedPassword: string) : boolean 
}