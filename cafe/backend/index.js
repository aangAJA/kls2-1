import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import userRoute from './routes/user_route.js'
import transaksiRoute from './routes/transaksi_route.js'
import mejaRoute from './routes/meja_route.js'
import menuRoute from './routes/menu_route.js'
// import detailRoute from './routes/detail_route.js'




const app = express()

dotenv.config()

app.use(express.json())
app.use('/user', userRoute)
app.use('/transaksi', transaksiRoute)
app.use('/meja', mejaRoute)
app.use('/menu', menuRoute)
// app.use('/detail', detailRoute)

app.post('../upload')
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).json({ error: 'Invalid JSON' })
    }
    next()
})



app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`)
})