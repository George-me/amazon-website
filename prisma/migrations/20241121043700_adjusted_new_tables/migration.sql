/*
  Warnings:

  - The primary key for the `items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `item_asin` on the `items` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the `item_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `item_images` DROP FOREIGN KEY `item_images_item_asin_fkey`;

-- AlterTable
ALTER TABLE `items` DROP PRIMARY KEY,
    MODIFY `item_asin` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`item_asin`);

-- DropTable
DROP TABLE `item_images`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `ItemImages` (
    `item_images_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_asin` VARCHAR(191) NOT NULL,
    `item_images_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`item_images_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cus_id` INTEGER NOT NULL,
    `order_address` VARCHAR(191) NOT NULL,
    `order_date` DATETIME(3) NOT NULL,
    `order_status` VARCHAR(191) NOT NULL,
    `order_expected_delivery_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItems` (
    `order_items_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `order_pack_id` INTEGER NOT NULL,
    `seller_id` INTEGER NOT NULL,
    `item_asin` VARCHAR(191) NOT NULL,
    `order_items_prime` BOOLEAN NOT NULL,
    `order_items_quantity` INTEGER NOT NULL,
    `order_items_status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`order_items_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderPacks` (
    `order_pack_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `pack_id` INTEGER NOT NULL,
    `order_pack_tracking_number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`order_pack_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `cus_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cus_fname` VARCHAR(191) NOT NULL,
    `cus_lname` VARCHAR(191) NOT NULL,
    `cus_prime_sub` BOOLEAN NOT NULL,
    `cus_email` VARCHAR(191) NOT NULL,
    `cus_phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cus_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CustomerAddress` (
    `cus_address_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cus_id` INTEGER NOT NULL,
    `cus_country` VARCHAR(191) NOT NULL,
    `cus_state` VARCHAR(191) NOT NULL,
    `cus_city` VARCHAR(191) NOT NULL,
    `cus_street_address` VARCHAR(191) NOT NULL,
    `cus_postal_code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cus_address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shipment` (
    `ship_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `order_pack_id` INTEGER NOT NULL,
    `ship_pickup_date` DATETIME(3) NOT NULL,
    `ship_delivery_date` DATETIME(3) NOT NULL,
    `ship_network` INTEGER NOT NULL,
    `ship_status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ship_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Package` (
    `pack_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pack_type` VARCHAR(191) NOT NULL,
    `pack_length_cm` DOUBLE NOT NULL,
    `pack_width_cm` DOUBLE NOT NULL,
    `pack_height_cm` DOUBLE NOT NULL,
    `pack_weight_limit_g` DOUBLE NOT NULL,

    PRIMARY KEY (`pack_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackageUses` (
    `pack_id` INTEGER NOT NULL,
    `pack_usage` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`pack_id`, `pack_usage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sellers` (
    `seller_id` INTEGER NOT NULL AUTO_INCREMENT,
    `seller_name` VARCHAR(191) NOT NULL,
    `seller_email` VARCHAR(191) NOT NULL,
    `seller_phone` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`seller_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SellersAddress` (
    `seller_address_id` INTEGER NOT NULL AUTO_INCREMENT,
    `seller_id` INTEGER NOT NULL,
    `seller_country` VARCHAR(191) NOT NULL,
    `seller_state` VARCHAR(191) NOT NULL,
    `seller_city` VARCHAR(191) NOT NULL,
    `seller_street_address` VARCHAR(191) NOT NULL,
    `seller_postal_code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`seller_address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SellerItems` (
    `seller_items_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_asin` VARCHAR(191) NOT NULL,
    `seller_id` INTEGER NOT NULL,
    `seller_items_list_price` DOUBLE NOT NULL,
    `seller_items_current_price` DOUBLE NOT NULL,
    `seller_items_rating` DOUBLE NOT NULL,
    `seller_items_quantity` INTEGER NOT NULL,

    PRIMARY KEY (`seller_items_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SellerPackages` (
    `seller_id` INTEGER NOT NULL,
    `pack_id` INTEGER NOT NULL,
    `seller_pack_available` BOOLEAN NOT NULL,

    PRIMARY KEY (`seller_id`, `pack_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ItemImages` ADD CONSTRAINT `ItemImages_item_asin_fkey` FOREIGN KEY (`item_asin`) REFERENCES `Items`(`item_asin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_cus_id_fkey` FOREIGN KEY (`cus_id`) REFERENCES `Customer`(`cus_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_order_pack_id_fkey` FOREIGN KEY (`order_pack_id`) REFERENCES `OrderPacks`(`order_pack_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `Sellers`(`seller_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItems` ADD CONSTRAINT `OrderItems_item_asin_fkey` FOREIGN KEY (`item_asin`) REFERENCES `Items`(`item_asin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderPacks` ADD CONSTRAINT `OrderPacks_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderPacks` ADD CONSTRAINT `OrderPacks_pack_id_fkey` FOREIGN KEY (`pack_id`) REFERENCES `Package`(`pack_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerAddress` ADD CONSTRAINT `CustomerAddress_cus_id_fkey` FOREIGN KEY (`cus_id`) REFERENCES `Customer`(`cus_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `Shipment_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shipment` ADD CONSTRAINT `Shipment_order_pack_id_fkey` FOREIGN KEY (`order_pack_id`) REFERENCES `OrderPacks`(`order_pack_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PackageUses` ADD CONSTRAINT `PackageUses_pack_id_fkey` FOREIGN KEY (`pack_id`) REFERENCES `Package`(`pack_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SellersAddress` ADD CONSTRAINT `SellersAddress_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `Sellers`(`seller_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SellerItems` ADD CONSTRAINT `SellerItems_item_asin_fkey` FOREIGN KEY (`item_asin`) REFERENCES `Items`(`item_asin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SellerItems` ADD CONSTRAINT `SellerItems_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `Sellers`(`seller_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SellerPackages` ADD CONSTRAINT `SellerPackages_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `Sellers`(`seller_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SellerPackages` ADD CONSTRAINT `SellerPackages_pack_id_fkey` FOREIGN KEY (`pack_id`) REFERENCES `Package`(`pack_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
