/*
  Warnings:

  - You are about to drop the column `StoreId` on the `Stores` table. All the data in the column will be lost.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `UserId` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Id]` on the table `Stores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `StoreName` to the `Stores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_StoreId_fkey";

-- DropForeignKey
ALTER TABLE "ItemList" DROP CONSTRAINT "ItemList_UserId_fkey";

-- DropForeignKey
ALTER TABLE "Stores" DROP CONSTRAINT "Stores_UserId_fkey";

-- DropIndex
DROP INDEX "Stores_StoreId_key";

-- AlterTable
ALTER TABLE "Stores" DROP COLUMN "StoreId",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD COLUMN     "StoreName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "UserId",
ADD COLUMN     "Id" SERIAL NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Stores_Id_key" ON "Stores"("Id");

-- AddForeignKey
ALTER TABLE "Stores" ADD CONSTRAINT "Stores_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_StoreId_fkey" FOREIGN KEY ("StoreId") REFERENCES "Stores"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
