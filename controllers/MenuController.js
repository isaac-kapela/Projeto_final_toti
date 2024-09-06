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

  excluir(req, res) {
    const { id } = req.params;

    const sql = 'DELETE FROM menu WHERE id = ?';
    db.run(sql, [id], function (erro) {
      if (erro) {
        res.status(400).json({ "erro": erro.message });
        return;
      }
      res.json({ message: `Item com ID ${id} excluído com sucesso.` });
    });
  }

  editar(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco, categoria, imagem, disponibilidade } = req.body;

    const sql = `UPDATE menu SET nome = ?, descricao = ?, preco = ?, categoria = ?, imagem = ?, disponibilidade = ? WHERE id = ?`;
    db.run(sql, [nome, descricao, preco, categoria, imagem, disponibilidade, id], function (erro) {
      if (erro) {
        res.status(400).json({ "erro": erro.message });
        return;
      }
      res.json({ message: `Item com ID ${id} atualizado com sucesso.` });
    });
  }
}

export default new MenuController();