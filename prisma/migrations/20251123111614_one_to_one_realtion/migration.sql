/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `userSetting` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `userSetting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usersetting` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `userSetting_userId_key` ON `userSetting`(`userId`);

-- AddForeignKey
ALTER TABLE `userSetting` ADD CONSTRAINT `userSetting_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
