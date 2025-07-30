import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export const getAllMesinCuci = async (req, res) => {
    
    try {
        const result = await prisma.mesin_cuci.findMany()
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                msg: "No transactions found"
            });
        }
        console.log(result);
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error(error); // Use console.error for better error logging
        res.status(500).json({
            success: false,
            msg: "An error occurred while retrieving transactions"
        });
    }
}
export const getMesinCuciById = async (req, res) => {
    try {
        const result = await prisma.mesin_cuci.findUnique({
            where:{
                id_mesin: Number(req.params.id)
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
export const addMesinCuci = async (req, res) => {
    try {
        const {nama, Harga} = req.body
        const result = await prisma.mesin_cuci.create({
            data: {
                merk: nama,
                HArga : Harga
            }
        })
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: MessageChannel.error
        })
    }
}
export const updateMesinCuci = async(req, res) =>{
    try {
        const {nama, Harga} = req.body
        const result = await prisma.mesin_cuci.update({
            where:{
                id_mesin:Number(req.params.id)
            },
            data:{
                merk: nama,
                HArga : Harga
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
export const deleteMesinCuci = async(req, res) =>{
    try {
       
        const result = await prisma.mesin_cuci.delete({
           where:{
            id_mesin: Number(req.params.id)
           }
        })
        res.json({
            message: "data berhasil di hapus",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg:"message.error"
        })
    }
}