/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Page` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Page_order_key";

-- AlterTable
ALTER TABLE "Page" ALTER COLUMN "order" DROP DEFAULT;
DROP SEQUENCE "page_order_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Page_id_key" ON "Page"("id");
