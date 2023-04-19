-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'SCHOLAR');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "topic_id" INTEGER NOT NULL,
    "post_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorUser_id" TEXT NOT NULL,
    "text_id" INTEGER NOT NULL,
    "thread_id" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reply" (
    "id" TEXT NOT NULL,
    "isAproved" BOOLEAN,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "Reply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Text" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'BASIC',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "avatarUrl" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_likedPost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ReplylikedUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Reply_id_key" ON "Reply"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Text_id_key" ON "Text"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_username_idx" ON "User"("email", "username");

-- CreateIndex
CREATE UNIQUE INDEX "_likedPost_AB_unique" ON "_likedPost"("A", "B");

-- CreateIndex
CREATE INDEX "_likedPost_B_index" ON "_likedPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ReplylikedUser_AB_unique" ON "_ReplylikedUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ReplylikedUser_B_index" ON "_ReplylikedUser"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_creatorUser_id_fkey" FOREIGN KEY ("creatorUser_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_text_id_fkey" FOREIGN KEY ("text_id") REFERENCES "Text"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_likedPost" ADD CONSTRAINT "_likedPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_likedPost" ADD CONSTRAINT "_likedPost_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReplylikedUser" ADD CONSTRAINT "_ReplylikedUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Reply"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ReplylikedUser" ADD CONSTRAINT "_ReplylikedUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
