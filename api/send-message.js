import { prisma } from '../prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Apenas POST é permitido' });
  }

  try {
    const { nome, email, mensagem } = req.body;

    // Validação extra no servidor
    if (!nome || !email || !mensagem || nome.trim() === "" || email.trim() === "") {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    // No seu schema.prisma, o modelo está definido como 'Mensagem'
    const registro = await prisma.mensagem.create({
      data: { 
        nome: nome.trim(), 
        email: email.trim(), 
        mensagem: mensagem.trim() 
      }
    });

    return res.status(201).json({ success: true, data: registro });
  } catch (error) {
    console.error("ERRO DE BANCO:", error);
    return res.status(500).json({ 
      error: `Erro no Prisma (${error.code || '500'}): ${error.message}` 
    });
  }
}