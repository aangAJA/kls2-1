import Express from 'express'
import {
    getAllMesinCuci,
    getMesinCuciById,
    addMesinCuci,
    updateMesinCuci,
    deleteMesinCuci
}from '../controllers/mesincuci_controler.js'

const app = Express()
app.use(Express.json())

app.get('/',getAllMesinCuci)
app.get('/:id',getMesinCuciById)
app.post('/',addMesinCuci)
app.put('/:id',updateMesinCuci)
app.delete('/:id',deleteMesinCuci)


export default app