/*
  Warnings:

  - You are about to drop the column `textId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `textId` on the `Suggestion` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Text` table. All the data in the column will be lost.
  - Added the required column `pageId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pageId` to the `Suggestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_textId_fkey";

-- DropForeignKey
ALTER TABLE "Suggestion" DROP CONSTRAINT "Suggestion_textId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "textId",
ADD COLUMN     "pageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Suggestion" DROP COLUMN "textId",
ADD COLUMN     "pageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Text" DROP COLUMN "content";

-- CreateTable
CREATE TABLE "Page" (
    "id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "textId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_textId_fkey" FOREIGN KEY ("textId") REFERENCES "Text"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
