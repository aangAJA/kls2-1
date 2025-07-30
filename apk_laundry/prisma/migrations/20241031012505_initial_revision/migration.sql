-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_user` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'pembeli') NOT NULL DEFAULT 'pembeli',

    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mesin_cuci` (
    `id_mesin` INTEGER NOT NULL AUTO_INCREMENT,
    `merk` VARCHAR(191) NOT NULL,
    `HArga` INTEGER NOT NULL,

    PRIMARY KEY (`id_mesin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksi` (
    `id_transaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `idMesin` INTEGER NOT NULL,
    `tgl` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('selesai', 'belum_selesai') NOT NULL DEFAULT 'selesai',

    PRIMARY KEY (`id_transaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail_transaksi` (
    `id_detail_transaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `TransaksiId` INTEGER NOT NULL,
    `mesinId` INTEGER NOT NULL,

    PRIMARY KEY (`id_detail_transaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_idMesin_fkey` FOREIGN KEY (`idMesin`) REFERENCES `mesin_cuci`(`id_mesin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_transaksi` ADD CONSTRAINT `detail_transaksi_TransaksiId_fkey` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi`(`id_transaksi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_transaksi` ADD CONSTRAINT `detail_transaksi_mesinId_fkey` FOREIGN KEY (`mesinId`) REFERENCES `mesin_cuci`(`id_mesin`) ON DELETE RESTRICT ON UPDATE CASCADE;
