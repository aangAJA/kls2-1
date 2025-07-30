import Express from 'express'
import {
    getAllTransaksi,
    getTransaksiByID,
    addTransaksi,
    updateTransaksi,
    deleteTransaksi
}from '../controllers/transaksi_controller.js'

const app = Express()
app.use(Express.json())

app.get('/',getAllTransaksi)
app.get('/:id',getTransaksiByID)
app.post('/',addTransaksi)
app.put('/:id',updateTransaksi)
app.delete('/:id',deleteTransaksi)
export default app;