/*
  Warnings:

  - Added the required column `item_price` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item_rating` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `items` ADD COLUMN `item_price` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `item_rating` INTEGER NOT NULL;
