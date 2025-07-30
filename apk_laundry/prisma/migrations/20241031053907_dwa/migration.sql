-- DropForeignKey
ALTER TABLE `detail_transaksi` DROP FOREIGN KEY `detail_transaksi_TransaksiId_fkey`;

-- AddForeignKey
ALTER TABLE `detail_transaksi` ADD CONSTRAINT `detail_transaksi_TransaksiId_fkey` FOREIGN KEY (`TransaksiId`) REFERENCES `transaksi`(`id_transaksi`) ON DELETE CASCADE ON UPDATE CASCADE;
