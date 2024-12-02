-- CreateTable
CREATE TABLE `BuyWith` (
    `item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_asin` VARCHAR(191) NOT NULL,
    `grouped_item_asin` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BuyWith` ADD CONSTRAINT `BuyWith_item_asin_fkey` FOREIGN KEY (`item_asin`) REFERENCES `Items`(`item_asin`) ON DELETE RESTRICT ON UPDATE CASCADE;
