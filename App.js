import express from 'express';
import MenuController from './controllers/MenuController.js';

const app = express();

app.use(express.json());

app.get('/menu', MenuController.index);

app.post('/menu', MenuController.criar);

export default app;
