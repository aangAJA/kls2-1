import Express from 'express'
import {
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}from '../controllers/user_controler.js'

const app = Express()
app.use(Express.json())

app.get('/',getAllUser)
app.get('/:id',getUserById)
app.post('/',addUser)
app.put('/:id',updateUser)
app.delete('/:id',deleteUser)


export default app