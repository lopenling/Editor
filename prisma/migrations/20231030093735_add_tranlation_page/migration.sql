/*
  Warnings:

  - Added the required column `pageId` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Translation" ADD COLUMN     "pageId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
