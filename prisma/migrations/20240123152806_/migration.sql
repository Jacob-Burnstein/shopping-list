/*
  Warnings:

  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_StoreId_fkey";

-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_UserId_fkey";

-- DropTable
DROP TABLE "Store";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "UserId" SERIAL NOT NULL,
    "UserName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Stores" (
    "StoreId" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_UserName_key" ON "Users"("UserName");

-- CreateIndex
CREATE UNIQUE INDEX "Stores_StoreId_key" ON "Stores"("StoreId");

-- AddForeignKey
ALTER TABLE "Stores" ADD CONSTRAINT "Stores_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_StoreId_fkey" FOREIGN KEY ("StoreId") REFERENCES "Stores"("StoreId") ON DELETE RESTRICT ON UPDATE CASCADE;
