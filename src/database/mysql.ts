import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import {Signale} from 'signale'

dotenv.config()
const signale = new Signale()

const config = {
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    waitForConnection: true,
    connectionLimit: 10
}

const pool = mysql.createPool(config)

export async function query(sql: string, params: any[]) {

    try{
        const con = await pool.getConnection()

        const result = await con.execute(sql, params)
        con.release()
        return result

    } catch(error: any){
        signale.error(error.message)
        return null
    }

}