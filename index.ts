import express from 'express'
import signale from 'signale'

const app = express()

app.use(express.json())

//usuarios 
import userRouter from "./src/User/infrastructure/User.route"
app.use('/users', userRouter)

//metas
import goalRouter from './src/Goal/infrastructure/goal.route'
app.use('/vehicules', goalRouter)


const PORT = 3000
app.listen(PORT, () => {
    signale.success('servidor escuchando en el puerto ' + PORT)
})