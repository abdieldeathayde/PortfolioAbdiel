import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Apenas POST é permitido' });
  }

  try {
    const { nome, email, mensagem } = req.body;

    const novoContato = await prisma.contato.create({
      data: { nome, email, mensagem }
    });

    return res.status(201).json({ success: true, data: novoContato });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao salvar mensagem: " + error.message });
  } finally {
    await prisma.$disconnect();
  }
}