import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { nome, email, mensagem } = req.body;
    
    // Usando o modelo "mensagem" que o Prisma sincronizou
    await prisma.mensagem.create({
      data: { nome, email, mensagem }
    });

    return res.status(201).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}