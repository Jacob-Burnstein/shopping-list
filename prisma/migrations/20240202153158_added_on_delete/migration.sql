-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_StoreId_fkey";

-- DropForeignKey
ALTER TABLE "Stores" DROP CONSTRAINT "Stores_UserId_fkey";

-- AddForeignKey
ALTER TABLE "Stores" ADD CONSTRAINT "Stores_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_StoreId_fkey" FOREIGN KEY ("StoreId") REFERENCES "Stores"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
