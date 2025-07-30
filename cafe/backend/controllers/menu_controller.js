import {PrismaClient} from "@prisma/client"
import multer from 'multer'
import path from 'path'
import upload from "../upload_image_menu/image_menu.js"

const prisma = new PrismaClient



export const getAllmenu = async(req, res) =>{
    try {
        const result = await prisma.menu.findMany()
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
export const getmenuByID = async(req, res) =>{
    try {
        const result = await prisma.menu.findUnique({
            where:{
                id_menu: Number(req.params.id)
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
export const addmenu = async (req, res) => {
    upload.single('filename')(req,res, async (error)=>{
        if(error){
            console.log("cek", error)
            return res.status(400).json({ message: error })
        }else if(!req.file){
            return res.status(400).json({ message: `Nothing to upload` });
        }
 
        const{Nama_menu, Deskripsi, Harga, } = req.body
        const{filename} = req.file
        try {
            const result = await prisma.menu.create({
                data:{
                    nama_menu: Nama_menu,
                    deskripsi: Deskripsi,
                    harga: Number(Harga),
                    gambar: filename
                }
            })
            res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: error.message})
        }
    })
}
export const updatemenu = async(req, res) =>{
    try {
        const {Nomor_meja} = req.body
        const result = await prisma.menu.update({
            where:{
                id_menu:Number(req.params.id)
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
export const deletemenu = async(req, res) =>{
    try {
       
        const result = await prisma.menu.delete({
           where:{
            id_menu: Number(req.params.id)
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