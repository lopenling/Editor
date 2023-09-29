-- CreateTable
CREATE TABLE "Annotations" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "pageId" TEXT NOT NULL,

    CONSTRAINT "Annotations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Annotations_id_key" ON "Annotations"("id");

-- AddForeignKey
ALTER TABLE "Annotations" ADD CONSTRAINT "Annotations_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
