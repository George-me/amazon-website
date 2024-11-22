-- CreateTable
CREATE TABLE `Item` (
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
