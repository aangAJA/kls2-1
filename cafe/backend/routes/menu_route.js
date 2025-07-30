import Express from 'express'
import {
    getAllmenu, 
    getmenuByID, 
    addmenu,
    updatemenu, 
    deletemenu
}from '../controllers/menu_controller.js'


import { authenticate, authorize } from '../controllers/auth.controller.js'
import { admin, manager, kasir } from '../middleware/role_validation.js'


const app = Express()
app.use(Express.json())

app.get('/', authorize, kasir, manager, admin,getAllmenu)
app.get('/:id',getmenuByID)
app.post('/',addmenu)
app.put('/:id',updatemenu)
app.delete('/:id',deletemenu)
export default app