import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient

export const getAllUser = async(req,res) => {
    console.log("wdw")
    try {
        const result = await prisma.User.findMany()
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

export const getUserById = async(req,res) => {
    try {
        const result = await prisma.user.findUnique({
            where: {
                id_user: Number(req.params.id)
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

export const addUser = async(req,res) => {
    try {
        const {nama} = req.body
        const result = await prisma.user.create({
            data: {
                nama_user: nama
              
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

export const updateUser = async(req,res) => {
    try {
        const {nama,} = req.body
        const result = await prisma.User.update({
            where: {
                id_user: Number(req.params.id)
            },
            data: {
                nama_user: nama
              
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

export const deleteUser = async(req,res) => {
    try {
        const result = await prisma.user.delete({
            where: {
                id_user: Number(req.params.id)
            }
        })
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Message.error "
        })
    }
}