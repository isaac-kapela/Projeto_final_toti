
import { db, adicionarItemMenu } from '../DB/db.js';

class MenuController {
  listar(req, res) {
    const sql = 'SELECT * FROM menu';
    db.all(sql, [], (erro, resultado) => {
      if (erro) {
        res.status(400).json({ "erro": erro.message });
        return;
      }
      res.json(resultado);
    });
  }

  criar(req, res) {
    const { nome, descricao, preco, categoria, imagem, disponibilidade } = req.body;

    adicionarItemMenu(nome, descricao, preco, categoria, imagem, disponibilidade)
      .then((id) => {
        res.status(201).json({ id, message: 'Item adicionado com sucesso.' });
      })
      .catch((erro) => {
        res.status(400).json({ "erro": erro.message });
      });
  }
}

export default new MenuController();