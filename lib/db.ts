import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

declare global {
    var prisma : PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV!=="production") globalThis.prisma=db;

// (async () => {
//   try {
//     console.log(await prisma.user.create({ data: { } }));
//   } catch (err) {
//     console.error("error executing query:", err);
//   } finally {
//     prisma.$disconnect();
//   }
// })();