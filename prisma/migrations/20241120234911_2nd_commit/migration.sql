/*
  Warnings:

  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `item`;

-- CreateTable
CREATE TABLE `Items` (
    `item_asin` VARCHAR(191) NOT NULL,
    `item_name` VARCHAR(191) NOT NULL,
    `item_url` VARCHAR(191) NOT NULL,
    `item_brand` VARCHAR(191) NOT NULL,
    `item_brand_url` VARCHAR(191) NOT NULL,
    `item_category` VARCHAR(191) NOT NULL,
    `item_sub_category` VARCHAR(191) NOT NULL,
    `item_length_cm` DOUBLE NOT NULL,
    `item_width_cm` DOUBLE NOT NULL,
    `item_height_cm` DOUBLE NOT NULL,
    `item_weight_g` DOUBLE NOT NULL,

    PRIMARY KEY (`item_asin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `followers` INTEGER NOT NULL DEFAULT 0,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
