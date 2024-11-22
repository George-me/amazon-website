/*
  Warnings:

  - The primary key for the `items` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `items` DROP PRIMARY KEY,
    MODIFY `item_asin` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`item_asin`);

-- CreateTable
CREATE TABLE `item_images` (
    `item_images_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_asin` VARCHAR(255) NOT NULL,
    `item_images_url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`item_images_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `item_images` ADD CONSTRAINT `item_images_item_asin_fkey` FOREIGN KEY (`item_asin`) REFERENCES `items`(`item_asin`) ON DELETE RESTRICT ON UPDATE CASCADE;
