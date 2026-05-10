// api/send-contact.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  // Apenas aceitamos requisições do tipo POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  try {
    // Pegamos os dados enviados pelo Frontend
    const { nome, email, mensagem } = req.body;

    // Validação básica (BackEnd sempre deve validar)
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Guardamos no banco usando o Prisma
    const novaMensagem = await prisma.mensagem.create({
      data: { nome, email, mensagem },
    });

    // Retornamos sucesso
    return res.status(201).json({ success: true, data: novaMensagem });

  } catch (error) {
    // Em caso de erro técnico
    console.error("Erro na API:", error);
    return res.status(500).json({ error: 'Erro interno ao guardar a mensagem.' });
  } finally {
    // Desconectamos do banco para evitar desperdício de recursos
    await prisma.$disconnect();
  }
}