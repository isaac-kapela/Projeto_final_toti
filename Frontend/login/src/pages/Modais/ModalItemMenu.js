import React, { useContext } from 'react';
import "./Modal.css";
import { CarrinhoContexto } from '../../Context/ItemContext'; 

export default function ModalItemMenu({ item, fecharModal }) {
  const { adicionarAoCarrinho } = useContext(CarrinhoContexto); 

  if (!item) return null;

  const handleAddToCarrinho = () => {
    console.log("Adicionando ao carrinho:", item);
    adicionarAoCarrinho(item);
    fecharModal();
  };

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
        <button className="botao" onClick={handleAddToCarrinho}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}