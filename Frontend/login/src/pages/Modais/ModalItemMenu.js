import React from 'react';
import "./Modal.css";

export default function ModalItemMenu({ item, fecharModal }) {
  if (!item) return null;

  return (
    <div className="modal">
      <div className="modal-conteudo">
        <button className="modal-fechar" onClick={fecharModal}>X</button>
        <h3 className="titulo-item">{item.nome}</h3>
        <img src={item.imagem} alt={item.nome} className="imagem-item" />
        <p className="descricao-item">{item.descricao}</p>
        <div className="detalhes-item">
          <p className="preco-item">Preço: {item.preco}</p>
          <p className="disponibilidade-item">Disponível: {item.disponivel ? "Sim" : "Não"}</p>
        </div>
        <button className="botao">Adicionar ao carrinho</button>
      </div>
    </div>
  );
}