import Express from 'express'
import {
    addUser,
    getAllUser, 
    getUserByID, 
    updateUser, 
    deleteUser
}from '../controllers/user_controller.js'

import { authenticate, authorize } from '../controllers/auth.controller.js'
import { admin, manager, kasir } from '../middleware/role_validation.js'

const app = Express()
app.use(Express.json())

app.get('/',getAllUser)
app.get('/:id',getUserByID)
app.post('/', authorize, [admin], addUser)
app.put('/:id',updateUser)
app.delete('/:id',deleteUser)

app.post('/login', authenticate)

export default app