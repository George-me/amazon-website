-- AlterTable
ALTER TABLE `items` MODIFY `item_length_cm` DECIMAL(10, 2) NOT NULL,
    MODIFY `item_width_cm` DECIMAL(10, 2) NOT NULL,
    MODIFY `item_height_cm` DECIMAL(10, 2) NOT NULL,
    MODIFY `item_weight_g` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `package` MODIFY `pack_length_cm` DECIMAL(10, 2) NOT NULL,
    MODIFY `pack_width_cm` DECIMAL(10, 2) NOT NULL,
    MODIFY `pack_height_cm` DECIMAL(10, 2) NOT NULL,
    MODIFY `pack_weight_limit_g` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `selleritems` MODIFY `seller_items_list_price` DECIMAL(10, 2) NOT NULL,
    MODIFY `seller_items_current_price` DECIMAL(10, 2) NOT NULL,
    MODIFY `seller_items_rating` DECIMAL(10, 2) NOT NULL;
