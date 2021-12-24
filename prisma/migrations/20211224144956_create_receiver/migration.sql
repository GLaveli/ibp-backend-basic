-- CreateTable
CREATE TABLE "Receiver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "last_received" TIMESTAMP NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Receiver_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Receiver" ADD CONSTRAINT "Receiver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
