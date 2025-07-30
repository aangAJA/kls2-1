import Express from "express";
import { addEvent, getAllEvent, getEventById, updateEvent, deleteEvent }from '../controllers/event.controller.js'

const app = Express()
app.use(Express.json())

app.get('/', getAllEvent); 
app.get('/', getEventById); 
app.post('/', addEvent); 
app.put('/', updateEvent); 
app.delete('/:eventID', deleteEvent); 
export default app