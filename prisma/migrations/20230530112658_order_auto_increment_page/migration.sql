-- AlterTable
CREATE SEQUENCE page_order_seq;
ALTER TABLE "Page" ALTER COLUMN "order" SET DEFAULT nextval('page_order_seq');
ALTER SEQUENCE page_order_seq OWNED BY "Page"."order";
