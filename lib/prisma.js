// lib/prisma.js
import { PrismaClient } from '@prisma/client';

// Use globalThis so it works reliably in Node + Turbopack + different runtimes
const globalForPrisma = globalThis;

/**
 * Reuse existing PrismaClient instance in development to avoid exhausting connections.
 * In production, create a fresh instance.
 */
const prisma = globalForPrisma.__prisma?.client ?? new PrismaClient();

// Store on globalThis for hot-reloads during dev
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__prisma = { client: prisma };
}

export default prisma;
