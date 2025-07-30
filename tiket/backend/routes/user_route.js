import Express from "express";
import {
    addUser,
    getAlluser, getUserById, updateUser, deleteUser
}from '../controllers/user.controller.js'

const app = Express()
app.use(Express.json())

app.get('/',getAlluser)
app.get('/',getUserById)
app.post('/',addUser)
app.put('/',updateUser)
app.delete('/',deleteUser)
export default app