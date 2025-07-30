import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const getAllTransaksi = async (req, res) => {
    console.log("wdw")
    try {
        const result = await prisma.transaksi.findMany()
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
export const getTransaksiByID = async (req, res) => {
    try {

        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                msg: "Invalid ID format"
            });
        }

        const result = await prisma.transaksi.findUnique({
            where: {
                id_transaksi: id
            },
        });


        if (!result) {
            return res.status(404).json({
                success: false,
                msg: "Transaction not found"
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "An error occurred while retrieving the transaction"
        });
    }
}
export const addTransaksi = async (req, res) => {
    let { id_user, id_mesin } = req.body;

    // Validate input
    if (!id_user || !id_mesin) {
        return res.status(400).json({ msg: "User ID and Machine ID are required." });
    }

    const userId = Number(id_user);
    const mesinId = Number(id_mesin);

    if (isNaN(userId) || isNaN(mesinId)) {
        return res.status(400).json({ msg: "Invalid User ID or Machine ID." });
    }

    const [getUserId, getMesinId] = await Promise.all([
        prisma.user.findUnique({ where: { id_user: userId } }),
        prisma.mesin_cuci.findUnique({ where: { id_mesin: mesinId } })
        
    ]);

    if (getUserId && getMesinId) {
        try {
            const result = await prisma.transaksi.create({
                data: {
                    // User: {
                    //     connect: { id_user: userId }  // Connect to existing User
                    // },
                    // mesin_cuci: {
                    //     connect: { id_mesin: mesinId }  // Connect to existing MesinCuci
                    // },
                    idUser: {
                        connect: { id_user: userId }
                    },
                    id_mesiN: {
                    connect: {id_mesin: mesinId}
                    }
                }
            });

            if (result) {
                const createDetail = await prisma.detail_transaksi.create({
                    data: {
                        TRANSAKSI: {
                            connect: { id_transaksi: result.id_transaksi }
                        },
                        HARGA: {
                            connect: { id_mesin: getMesinId.id_mesin}
                        },
                    }
                });
                res.status(200).json({
                    success: true,
                    transaksi: result,
                    detail: createDetail
                });
            } else {
                res.status(400).json({ msg: "Transaksi gagal" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: error.message });
        }
    } else {
        res.json({ msg: `GTW` });
    }
}
export const updateTransaksi = async (req, res) => {
    try {
        const { id_user, id_mesin} = req.body
        const result = await prisma.transaksi.update({
            where: {
                id_transaksi: Number(req.params.id)
            },
            data: {
                id_user : id_user,
                idMesin : id_mesin
            }
        })
        res.json({
            message: "data berhasil di hapus",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "message.error"
        })
    }
}
export const deleteTransaksi = async (req, res) => {
    try {

        // prisma.detail_transaksi.findUnique({ where: { id_detail_transaksi: id_detail_transaksi } })
        // prisma.transaksi.findUnique({ where: { id_transaksi: id_transaksi } })
        const result = await prisma.transaksi.delete({

            where: {
                id_transaksi: Number(req.params.id)
            }
        })
        res.json({
            message: "data berhasil di hapus",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: MessageChannel.error
        })
    }
}