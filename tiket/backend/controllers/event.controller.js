import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
import upload from '../upload_image_event.js/upload_image_event.js'

export const getAllEvent = async(req,res)=>{
    try {
        const result = await prisma.event.findMany()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
    
}
export const getEventById = async(req,res)=>{
    try {
        const result = await prisma.event.findUnique({
            where:{
                evenID : Number(req.params.id)
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}
export const addEvent = (req,res)=>{
    upload.single('filename')(req,res, async (error)=>{
        if(error){
            console.log("cek", error)
            return res.status(400).json({ message: error })
        }else if(!req.file){
            return res.status(400).json({ message: `Nothing to upload` });
        }
        const{event_name, event_date, venue, price} = req.body
        const{filename} = req.file
        try {
            const parsedEventDate = new Date(event_date);
            if (isNaN(parsedEventDate.getTime())) {
                return res.status(400).json({ message: "Invalid event date format" });
            }
            const result = await prisma.event.create({
                data:{
                    eventName: event_name,
                    eventDate: parsedEventDate,
                    vanue: venue,
                    price: Number(price),
                    image: filename
                }
            })
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: error.message})
        }
    })
}
export const updateEvent = async(req,res)=>{
    const{event_name, event_date, venue, price, image} = req.body
    try {
        const result = await prisma.event.update({
            where:{
                evenID : req.params.id
            },
            data:{
                eventName: event_name,
                eventDate: event_date,
                venue: venue,
                price: price,
                image: image
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }

}
// export const deleteEvent = async(req,res)=>{
//     try {
//         const result = await prisma.event.delete({
//             where:{
//                 evenID : Number(req.params.id)
//             },
//         })
//         res.status(200).json(result)
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({msg: error.message})
//     }
// }
export const deleteEvent = async(req,res) =>{
    try {
        const {eventID} = req.params
        // const eventID = await prisma.EventID.findFirst({where: {
        //     eventID: Number(evenID)
        // }})
        if (!eventID)
        return res 
        .status(200)
        .json({
            message: `id not found ${eventID}` 
        })
        
        const result = await prisma.event.delete({
            where:{ eventID: Number(req.params.eventID)}
        })

        return res.json({
            status: true,
            data: result,
            massage: "event has been Deleted"
        }).status(200)

        } catch (error) {
        return res.json({
            succes: false,
            message:`${error}`
        })
    }
}
