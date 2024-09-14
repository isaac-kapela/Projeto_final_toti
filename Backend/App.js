import express from 'express';
import MenuController from './controllers/MenuController.js';
//import checarToken from './controllers/checkartoken.js';

const app = express();

app.use(express.json());

// Rotas
app.get('/', MenuController.listar);
app.post('/criar',  MenuController.criar);
app.put('/editar/:id',  MenuController.editar);
app.delete('/excluir/:id',  MenuController.excluir);

export default app;