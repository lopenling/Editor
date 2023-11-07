/*
  Warnings:

  - The required column `pageId` was added to the `UserText` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "UserText" ADD COLUMN     "pageId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserText" ADD CONSTRAINT "UserText_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
