import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

const port = 3000;

app.post('/livros', async (req: Request, res: Response) => {
  const { titulo, autor, anoPublicacao } = req.body;
  const anoAtual = new Date().getFullYear();

  if (anoPublicacao > anoAtual) {
    return res.status(400).json({ erro: 'Ano de publicação impossível.' });
  }

  const livro = await prisma.livro.create({
    data: {
      titulo,
      autor,
      anoPublicacao,
      disponivel: true
    }
  });

  res.status(201).json(livro);
});

app.get('/livros', async (req: Request, res: Response) => {
  const { autor, disponivel } = req.query;

  const filtros: any = {};
  if (autor) filtros.autor = { contains: autor as string };
  if (disponivel !== undefined) filtros.disponivel = disponivel === 'true';

  const livros = await prisma.livro.findMany({ where: filtros });
  res.json(livros);
});

app.patch('/livros/:id/emprestar', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const livro = await prisma.livro.findUnique({ where: { id } });

  if (!livro) {
    return res.status(404).json({ erro: 'Livro não encontrado.' });
  }

  if (!livro.disponivel) {
    return res.status(400).json({ erro: 'Livro já emprestado.' });
  }

  const atualizado = await prisma.livro.update({
    where: { id },
    data: { disponivel: false }
  });

  res.json(atualizado);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
