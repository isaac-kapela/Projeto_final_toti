import express from 'express';
import MenuController from './controllers/MenuController.js';
import cors from 'cors';

import checarToken from './controllers/checkartoken.js';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
  

app.get('/', checarToken, MenuController.listar);
app.post('/criar', checarToken, MenuController.criar);
app.put('/editar/:id', checarToken,  MenuController.editar);
app.delete('/excluir/:id', checarToken, MenuController.excluir);

export default app;