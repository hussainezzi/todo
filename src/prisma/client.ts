//@ts-nocheck

import { PrismaClient } from "@prisma/client";
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import dotenv from 'dotenv'; dotenv.config();
import ws from 'ws';

let prisma: PrismaClient;

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.POSTGRES_PRISMA_POOL_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
// const prisma = new PrismaClient({ adapter });

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({ adapter });
  }
  prisma = global.prisma;
}

export default prisma;