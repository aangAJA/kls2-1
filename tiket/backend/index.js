import Express  from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from './routes/user_route.js'
import eventRoute from './routes/event_route.js'

const app = Express()
dotenv.config()
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

app.use('/user', userRoute)
app.use('/event', eventRoute)

app.listen(process.env.app_port,()=>{
console.log('server run on '+process.env.app_port)
})

