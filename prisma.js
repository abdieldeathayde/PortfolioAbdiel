import { PrismaClient } from '@prisma/client';

// 1. Usa o objeto global para salvar a instância do PrismaClient
const globalForPrisma = globalThis;

// 2. Removemos o "{}" de dentro do PrismaClient()
export const prisma = globalForPrisma.prisma || new PrismaClient();

// 3. Em ambiente de desenvolvimento, salva a instância no escopo global 
// para evitar estourar o limite de conexões do banco com o Hot Reload
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export { prisma };