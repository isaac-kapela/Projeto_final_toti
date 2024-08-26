import app from './App.js';

const PORTA = process.env.PORTA || 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORTA}`);
});
