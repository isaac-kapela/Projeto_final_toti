import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './produtos.css'; 
import SideBar from "../../../components/sideBar/sideBar";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const buscarProdutos = async () => {
    try {
      const resposta = await axios.get("http://localhost:8080/menu", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProdutos(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
    }
  };

  useEffect(() => {
    buscarProdutos();
  }, []);
  const produtosAgrupados = produtos.reduce((acc, produto) => {
    const { nome } = produto;
    if (!acc[nome]) {
      acc[nome] = { ...produto, quantidade: 0 };
    }
    acc[nome].quantidade += 1;
    return acc;
  }, {});

  const produtosArray = Object.values(produtosAgrupados);

  return (
    <div className="containerProdutos">
        <SideBar />
      <h1>Lista de Produtos</h1>
      <p>Total de Produtos: {produtos.length}</p>
      <ul className="ul_produtos">
        {produtosArray.map(produto => (
          <li className="li_produto" key={produto.id}>
            <span>{produto.nome} (Quantidade: {produto.quantidade})</span>
            
          </li>
        ))}
      </ul>
    </div>
  );
}