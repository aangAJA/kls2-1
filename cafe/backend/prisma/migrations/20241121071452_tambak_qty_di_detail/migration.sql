/*
  Warnings:

  - Added the required column `qty` to the `detail_transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detail_transaksi` ADD COLUMN `qty` INTEGER NOT NULL;
