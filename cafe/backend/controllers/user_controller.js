import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient

export const getAllUser = async(req, res) =>{
    try {
        const result = await prisma.user.findMany()
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
export const getUserByID = async(req, res) =>{
    try {
        const result = await prisma.user.findUnique({
            where:{
                id_user: Number(req.params.id)
            }
        })
        res.status(200).json({
            success:true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg:`Error${error}`
        })
    }
}
export const addUser = async (req, res) => {
    try {
        const { nama_user, username, password, Role } = req.body // Ensure correct field names

        console.log("dwwa");
        const result = await prisma.user.create({
            data: {
                nama_user: nama_user,
                role: Role,
                username: username,
                password: password
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
export const updateUser = async(req, res) =>{
    try {
        const {nama_user, username, password, Role} = req.body
        const result = await prisma.user.update({
            where:{
                id_user:Number(req.params.id)
            },
            data:{
                nama_user: nama_user, 
                role: Role,
                username: username, 
                password: password
            }
        })
        res.json({
            message: "success update",
            data:result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg:`message.error${error}`
        })
    }
}
export const deleteUser = async(req, res) =>{
    try {
       
        const result = await prisma.user.delete({
           where:{
            id_user: Number(req.params.id)
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