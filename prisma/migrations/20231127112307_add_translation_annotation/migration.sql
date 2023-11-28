-- CreateTable
CREATE TABLE "Translation_Annotation" (
    "id" TEXT NOT NULL,
    "translationId" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Translation_Annotation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserText_Annotation" (
    "id" TEXT NOT NULL,
    "userTextId" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "UserText_Annotation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Translation_Annotation_id_key" ON "Translation_Annotation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserText_Annotation_id_key" ON "UserText_Annotation"("id");

-- AddForeignKey
ALTER TABLE "Translation_Annotation" ADD CONSTRAINT "Translation_Annotation_translationId_fkey" FOREIGN KEY ("translationId") REFERENCES "Translation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserText_Annotation" ADD CONSTRAINT "UserText_Annotation_userTextId_fkey" FOREIGN KEY ("userTextId") REFERENCES "UserText"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
