import express from 'express';
import cors from 'cors';
import app from './App.js';  
import { criarTabelaMenu, obterItensDoMenu } from './DB/db.js'; 

const PORTA = process.env.PORTA || 8080;

const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('bão?');
});

app.get('/menu', async (req, res) => {
  try {
    const menuItems = await obterItensDoMenu();
    res.json(menuItems);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar itens do menu' });
  }
});

const iniciarServidor = async () => {
  try {
    await criarTabelaMenu();  
    app.listen(PORTA, () => {
      console.log(`Servidor rodando na porta http://localhost:${PORTA}`);
    });
  } catch (erro) {
    console.error('Erro ao iniciar o servidor:', erro.message);
  }
};

iniciarServidor();
