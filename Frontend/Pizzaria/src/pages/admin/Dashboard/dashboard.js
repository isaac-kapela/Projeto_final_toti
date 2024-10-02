import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "../../../components/sideBar/sideBar";
import Modal from "../modal/modal"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
    imagem: "",
    disponibilidade: true,
  });
  const [isModalAberto, setIsModalAberto] = useState(false); 
  const [produtoParaEditar, setProdutoParaEditar] = useState(null); 

  const navegar = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navegar("/login");
  };

  const buscarProdutos = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const resposta = await axios.get("http://localhost:8080/menu", {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setProdutos(resposta.data);
      } else {
        console.error("Token não encontrado no localStorage");
      }
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  const adicionarProduto = async () => {
    const token = localStorage.getItem('token');
    if (novoProduto.nome && novoProduto.preco && token) {
      try {
        const resposta = await axios.post("http://localhost:8080/criar", novoProduto, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });
        setProdutos([...produtos, resposta.data]);
        setNovoProduto({
          nome: "",
          descricao: "",
          preco: "",
          categoria: "",
          imagem: "",
          disponibilidade: true,
        });
        toast.success("Produto adicionado com sucesso!");
      } catch (erro) {
        console.error("Erro ao adicionar produto:", erro);
        toast.error("Erro ao adicionar produto.");
      }
    } else {
      console.error("Dados incompletos ou token não encontrado");
      toast.error("Dados incompletos ou token não encontrado.");
    }
  };

  const removerProduto = async (id) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.delete(`http://localhost:8080/excluir/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProdutos(produtos.filter((produto) => produto.id !== id));
        toast.success("Produto removido com sucesso!");
      } catch (erro) {
        console.error("Erro ao remover produto:", erro);
        toast.error("Erro ao remover produto.");
      }
    }
  };

  const editarProduto = (produto) => {
    setProdutoParaEditar(produto); 
    setIsModalAberto(true); 
  };

  const handleModalClose = () => {
    setIsModalAberto(false); 
    setProdutoParaEditar(null); 
  };

  const salvarProduto = async (produtoEditado) => {
    const token = localStorage.getItem('token');
    if (produtoEditado.nome && produtoEditado.preco && token) {
      try {
        const resposta = await axios.put(`http://localhost:8080/editar/${produtoEditado.id}`, produtoEditado, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,  
          },
        });
        const produtosAtualizados = produtos.map((produto) =>
          produto.id === produtoEditado.id ? resposta.data : produto
        );
        setProdutos(produtosAtualizados);
        toast.success("Produto editado com sucesso!");
      } catch (erro) {
        console.error("Erro ao editar produto:", erro);
        toast.error("Erro ao editar produto.");
      }
    }
  };

  return (
    <div className="container-dashboard">
      <SideBar />
      <button onClick={handleLogout} className="botao-logout">
        Sair
      </button>
      <h1>Gerenciador de Produtos</h1>

      <div className="secao-adicionar-produto">
        <h2>Adicionar Produto</h2>
        <input
          type="text"
          placeholder="Nome do produto"
          className="campo-input"
          value={novoProduto.nome}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, nome: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Descrição"
          className="campo-input"
          value={novoProduto.descricao}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, descricao: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Preço"
          className="campo-input"
          value={novoProduto.preco}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, preco: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Categoria"
          className="campo-input"
          value={novoProduto.categoria}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, categoria: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Imagem (URL)"
          className="campo-input"
          value={novoProduto.imagem}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, imagem: e.target.value })
          }
        />
        <label>
          Disponibilidade:
          <input
            type="checkbox"
            checked={novoProduto.disponibilidade}
            onChange={(e) =>
              setNovoProduto({
                ...novoProduto,
                disponibilidade: e.target.checked,
              })
            }
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
                <td>
                  <img src={produto.imagem} alt={produto.nome} width="50" />
                </td>
                <td>{produto.disponibilidade ? "Sim" : "Não"}</td>
                <td className="Btns-container">
                  <button
                    className="botao-editar"
                    onClick={() => editarProduto(produto)}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Editar
                  </button>
                  <button
                    className="botao-remover"
                    onClick={() => removerProduto(produto.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalAberto && (
        <Modal produto={produtoParaEditar} onClose={handleModalClose} onSave={salvarProduto} />
      )}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;