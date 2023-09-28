/*
  Warnings:

  - Added the required column `content` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Translation" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "language" TEXT;
