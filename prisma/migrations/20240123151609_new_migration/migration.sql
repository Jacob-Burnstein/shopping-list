-- CreateTable
CREATE TABLE "User" (
    "UserId" SERIAL NOT NULL,
    "UserName" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Store" (
    "StoreId" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ItemList" (
    "Id" SERIAL NOT NULL,
    "ItemName" TEXT NOT NULL,
    "UserId" INTEGER NOT NULL,
    "StoreId" INTEGER NOT NULL,

    CONSTRAINT "ItemList_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_UserName_key" ON "User"("UserName");

-- CreateIndex
CREATE UNIQUE INDEX "Store_StoreId_key" ON "Store"("StoreId");

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemList" ADD CONSTRAINT "ItemList_StoreId_fkey" FOREIGN KEY ("StoreId") REFERENCES "Store"("StoreId") ON DELETE RESTRICT ON UPDATE CASCADE;
