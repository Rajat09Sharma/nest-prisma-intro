/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `post_userId_key` ON `post`(`userId`);

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
