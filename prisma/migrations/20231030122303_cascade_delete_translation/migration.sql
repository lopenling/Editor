-- DropForeignKey
ALTER TABLE "Translation" DROP CONSTRAINT "Translation_userTextId_fkey";

-- AddForeignKey
ALTER TABLE "Translation" ADD CONSTRAINT "Translation_userTextId_fkey" FOREIGN KEY ("userTextId") REFERENCES "UserText"("id") ON DELETE CASCADE ON UPDATE CASCADE;
