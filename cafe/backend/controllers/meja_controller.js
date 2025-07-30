import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient

export const getAllmeja = async(req, res) =>{
    try {
        const result = await prisma.meja.findMany()
        res.status(200).json({
            success:true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg:`message.error${error}`
        })
    }
}
export const getmejaByID = async(req, res) =>{
    try {
        const result = await prisma.meja.findUnique({
            where:{
                id_meja: Number(req.params.id)
            }
        })
        res.status(200).json({
            success:true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg:message.error
        })
    }
}
export const addmeja = async (req, res) => {
    try {
        const { Nomor_meja } = req.body // Ensure correct field names

        console.log(Nomor_meja);
        const result = await prisma.meja.create({
            data: {
                nomor_meja : Nomor_meja
            }
        });
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `error${error}` 
        });
    }
}
export const updatemeja = async(req, res) =>{
    try {
        const {Nomor_meja} = req.body
        const result = await prisma.meja.update({
            where:{
                id_meja:Number(req.params.id)
            },
            data:{
                nomor_meja : Nomor_meja
            }
        })
        res.json({
            message: "success update",
            data:result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg:message.error
        })
    }
}
export const deletemeja = async(req, res) =>{
    try {
       
        const result = await prisma.meja.delete({
           where:{
            id_meja: Number(req.params.id)
           }
        })
        res.json({
            message: "data berhasil di hapus",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg:`error${error}`
        })
    }
}