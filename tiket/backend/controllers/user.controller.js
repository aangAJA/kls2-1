import { Prisma, PrismaClient } from "@prisma/client";
import md5 from "md5"

const prisma = new PrismaClient()

export const getAlluser = async(req, res) => {
    try {
        const response = await prisma.user.findMany()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}

export const getUserById = async(req, res) => {
    try {
        const result = await prisma.user.findUnique({
            where:{
                userID: Number(req.params.id)
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}
export const addUser = async(req, res) => {
    const {firstname, lastname, email, password} = req.body
    try {
        const result = await prisma.user.create({
            data:{
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: md5(password)
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const updateUser = async(req, res) => {
    const {firstname, lastname, email, password} = req.body
    try {
        const result = await prisma.user.update({
            where:{
                userID: Number(req.params.id)
            },
            data:{
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: md5(password)
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
export const deleteUser = async(req, res) => {
    try {
        const result = await prisma.user.delete({
            where:{
                userID: Number(req.params.id)
            },
        })
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}