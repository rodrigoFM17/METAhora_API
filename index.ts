import express from 'express'
import signale from 'signale'

const app = express()

app.use(express.json())

//drivers 
import driverRouter from './src/Driver/infrastructure/driver.route'
app.use('/drivers', driverRouter)

//vehicules
import vehiculeRouter from './src/Vehicule/infrastructure/vehicule.route'
app.use('/vehicules', vehiculeRouter)


const PORT = 3000
app.listen(PORT, () => {
    signale.success('servidor escuchando en el puerto ' + PORT)
})