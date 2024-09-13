import app from './App.js';
import { criarTabelaMenu } from './DB/db.js';
import cors from 'cors';
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


const PORTA = process.env.PORTA || 8000;

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
