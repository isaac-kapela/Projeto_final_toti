import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
    imagem: "",
    disponibilidade: true,
  });

  const buscarProdutos = async () => {
    try {
      const resposta = await fetch("http://localhost:8080/menu", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      });
      const dados = await resposta.json();
      setProdutos(dados);
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
    }
  };

  useEffect(() => {
    buscarProdutos(); 
  }, []);

  const adicionarProduto = async () => {
    if (novoProduto.nome && novoProduto.preco) {
      try {
        const resposta = await fetch("http://localhost:8080/criar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
          body: JSON.stringify(novoProduto),
        });
        const dados = await resposta.json();
        setProdutos([...produtos, dados]); 
        setNovoProduto({
          nome: "",
          descricao: "",
          preco: "",
          categoria: "",
          imagem: "",
          disponibilidade: true,
        });
      } catch (erro) {
        console.error("Erro ao adicionar produto:", erro);
      }
    }
  };

  const removerProduto = async (id) => {
    try {
      await fetch(`http://localhost:8080/excluir/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, 
        },
      });
      setProdutos(produtos.filter((produto) => produto.id !== id)); 
    } catch (erro) {
      console.error("Erro ao remover produto:", erro);
    }
  };

  const editarProduto = async (id) => {
    if (novoProduto.nome && novoProduto.preco) {
      try {
        const resposta = await fetch(`http://localhost:8080/editar/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
          body: JSON.stringify(novoProduto),
        });
        const dados = await resposta.json();
        const produtosAtualizados = produtos.map((produto) =>
          produto.id === id ? dados : produto
        );
        setProdutos(produtosAtualizados);
        setNovoProduto({
          nome: "",
          descricao: "",
          preco: "",
          categoria: "",
          imagem: "",
          disponibilidade: true,
        });
      } catch (erro) {
        console.error("Erro ao editar produto:", erro);
      }
    }
  };

  return (
    <div className="container-dashboard">
      <h1>Gerenciador de Produtos</h1>

      <div className="secao-adicionar-produto">
        <h2>Adicionar Produto</h2>
        <input
          type="text"
          placeholder="Nome do produto"
          className="campo-input"
          value={novoProduto.nome}
          onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrição"
          className="campo-input"
          value={novoProduto.descricao}
          onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })}
        />
        <input
          type="number"
          placeholder="Preço"
          className="campo-input"
          value={novoProduto.preco}
          onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categoria"
          className="campo-input"
          value={novoProduto.categoria}
          onChange={(e) => setNovoProduto({ ...novoProduto, categoria: e.target.value })}
        />
        <input
          type="text"
          placeholder="Imagem (URL)"
          className="campo-input"
          value={novoProduto.imagem}
          onChange={(e) => setNovoProduto({ ...novoProduto, imagem: e.target.value })}
        />
        <label>
          Disponibilidade:
          <input
            type="checkbox"
            checked={novoProduto.disponibilidade}
            onChange={(e) => setNovoProduto({ ...novoProduto, disponibilidade: e.target.checked })}
          />
        </label>
        <button className="botao-adicionar" onClick={adicionarProduto}>
          Adicionar
        </button>
      </div>

      <div className="secao-lista-produtos">
        <h2>Lista de Produtos</h2>
        <table className="tabela-produtos">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Imagem</th>
              <th>Disponibilidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.preco}</td>
                <td>{produto.categoria}</td>
                <td><img src={produto.imagem} alt={produto.nome} width="50" /></td>
                <td>{produto.disponibilidade ? "Sim" : "Não"}</td>
                <td className="Btns-container">
                  <button className="botao-editar" onClick={() => editarProduto(produto.id)}>
                  <FontAwesomeIcon icon={faEdit} /> Editar
                  </button>
                  <button className="botao-remover" onClick={() => removerProduto(produto.id)}>
                  <FontAwesomeIcon icon={faTrash} /> Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProdutos;
