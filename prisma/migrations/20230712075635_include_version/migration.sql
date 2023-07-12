-- CreateEnum
CREATE TYPE "Version" AS ENUM ('collaboration', 'derge', 'chone', 'narthang', 'peking');

-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "version" "Version";
