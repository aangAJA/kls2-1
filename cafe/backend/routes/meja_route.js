import Express from 'express'
import {
    getAllmeja, 
    getmejaByID, 
    addmeja,
    updatemeja, 
    deletemeja
}from '../controllers/meja_controller.js'

const app = Express()
app.use(Express.json())

app.get('/',getAllmeja)
app.get('/:id',getmejaByID)
app.post('/',addmeja)
app.put('/:id',updatemeja)
app.delete('/:id',deletemeja)
export default app