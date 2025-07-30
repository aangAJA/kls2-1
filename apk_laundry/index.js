import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import userRoute from './route/user_route.js'
import MesinCuciRoute from './route/mesincuci_route.js'
import TransaksiRoute from './route/transaksi_route.js'


const app = express()

dotenv.config()

app.use(express.json())
app.use('/user', userRoute)
app.use('/MesinCuci', MesinCuciRoute)
app.use('/transaksi', TransaksiRoute)

// app.use('/detail', detailRoute)


app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ error: 'Invalid JSON' })
    }
    next()
})



app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`)
})