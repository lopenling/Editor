/*
  Warnings:

  - You are about to drop the `Translation_Annotation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserText_Annotation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Translation_Annotation" DROP CONSTRAINT "Translation_Annotation_translationId_fkey";

-- DropForeignKey
ALTER TABLE "UserText_Annotation" DROP CONSTRAINT "UserText_Annotation_userTextId_fkey";

-- AlterTable
ALTER TABLE "Translation" ADD COLUMN     "annotation" JSONB[];

-- AlterTable
ALTER TABLE "UserText" ADD COLUMN     "Annotation" JSONB[];

-- DropTable
DROP TABLE "Translation_Annotation";

-- DropTable
DROP TABLE "UserText_Annotation";
