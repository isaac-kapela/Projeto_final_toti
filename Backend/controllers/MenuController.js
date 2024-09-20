import { db, adicionarItemMenu } from '../DB/db.js';

class MenuController {
  async listar(req, res) {
    const limit = parseInt(req.query.limit) || 10; 
    const sql = 'SELECT * FROM menu LIMIT ?';
    try {
      const resultado = await new Promise((resolve, reject) => {
        db.all(sql, [limit], (erro, resultado) => {
          if (erro) {
            reject(erro);
          } else {
            resolve(resultado);
          }
        });
      });
      res.json(resultado);
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async criar(req, res) {
    const { nome, descricao, preco, categoria, imagem, disponibilidade } = req.body;
    try {
      const id = await adicionarItemMenu(nome, descricao, preco, categoria, imagem, disponibilidade);
      res.status(201).json({ id, message: 'Item adicionado com sucesso.' });
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async excluir(req, res) {
    const { id } = req.params;
    const sql = 'DELETE FROM menu WHERE id = ?';

    try {
      await new Promise((resolve, reject) => {
        db.run(sql, [id], function (erro) {
          if (erro) {
            reject(erro);
          } else {
            resolve();
          }
        });
      });
      res.json({ message: `Item com ID ${id} excluído com sucesso.` });
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }

  async editar(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco, categoria, imagem, disponibilidade } = req.body;

    if (!nome || !preco) {
      res.status(400).json({ erro: 'Os campos nome e preco são obrigatórios.' });
      return;
    }

    const sql = `UPDATE menu SET nome = ?, descricao = ?, preco = ?, categoria = ?, imagem = ?, disponibilidade = ? WHERE id = ?`;

    try {
      await new Promise((resolve, reject) => {
        db.run(sql, [nome, descricao, preco, categoria, imagem, disponibilidade, id], function (erro) {
          if (erro) {
            reject(erro);
          } else {
            resolve();
          }
        });
      });
      res.json({ message: `Item com ID ${id} atualizado com sucesso.` });
    } catch (erro) {
      res.status(400).json({ erro: erro.message });
    }
  }
}

export default new MenuController();