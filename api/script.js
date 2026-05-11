import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Busca os projetos usando o Prisma
    const projetos = await prisma.projeto.findMany({
      orderBy: { ordem: 'asc' }
    });
    
    return res.status(200).json(projetos);
  } catch (error) {
    console.error("Erro no Prisma:", error);
    return res.status(500).json({ error: "Erro ao buscar projetos: " + error.message });
  } finally {
    await prisma.$disconnect();
  }
}