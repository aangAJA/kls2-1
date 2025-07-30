import Express from 'express'
import {
    getAlldetail_transaksi, 
    getdetail_transaksiByID, 
    adddetail_transaksi,
    updatedetail_transaksi, 
    deletedetail_transaksi
}from '../controllers/transaksi_controller.js'

const app = Express()
app.use(Express.json())

app.get('/',getAlldetail_transaksi)
app.get('/:id',getdetail_transaksiByID)
app.post('/',adddetail_transaksi)
app.put('/:id',updatedetail_transaksi)
app.delete('/:id',deletedetail_transaksi)

export default app