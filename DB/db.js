//db.js
import sqlite3 from 'sqlite3';

const bancoDados = new sqlite3.Database('./menu.db', (erro) => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

const criarTabelaMenu = async () => {
  return new Promise((resolver, rejeitar) => {
    bancoDados.run(`CREATE TABLE IF NOT EXISTS menu (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      descricao TEXT,
      preco REAL NOT NULL,
      categoria TEXT,
      imagem TEXT,
      disponibilidade BOOLEAN NOT NULL DEFAULT 1
    )`, (erro) => {
      if (erro) {
        console.error('Erro ao criar a tabela de menu:', erro.message);
        rejeitar(erro);
      } else {
        console.log('Tabela de menu criada com sucesso.');
        resolver();
      }
    });
  });
};

const adicionarItemMenu = async (nome, descricao, preco, categoria, imagem, disponibilidade) => {
  return new Promise((resolver, rejeitar) => {
    const query = `INSERT INTO menu (nome, descricao, preco, categoria, imagem, disponibilidade) VALUES (?, ?, ?, ?, ?, ?)`;
    bancoDados.run(query, [nome, descricao, preco, categoria, imagem, disponibilidade], function (erro) {
      if (erro) {
        console.error('Erro ao adicionar item ao menu:', erro.message);
        rejeitar(erro);
      } else {
        console.log('Item adicionado ao menu com sucesso.');
        resolver(this.lastID); 
      }
    });
  });
};

const fecharBancoDados = async () => {
  return new Promise((resolver, rejeitar) => {
    bancoDados.close((erro) => {
      if (erro) {
        console.error('Erro ao fechar a conexão com o banco de dados:', erro.message);
        rejeitar(erro);
      } else {
        console.log('Conexão com o banco de dados fechada.');
        resolver();
      }
    });
  });
};

export { bancoDados as db, criarTabelaMenu, adicionarItemMenu, fecharBancoDados };