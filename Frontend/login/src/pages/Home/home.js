import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./home.css";
import ModalItemMenu from '../Modais/ModalItemMenu';

const ControllaMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens do menu:', error);
      });
  }, []);

  const abrirModal = (item) => {
    setItemSelecionado(item);
  };

  const fecharModal = () => {
    setItemSelecionado(null);
  };

  const formatarDisponibilidade = (disponivel) => {
    if (disponivel === 1) {
      return "Sim";
    } else {
      return "Não";
    }
  };

  return (
    <>
      <div className="containerItens">
        <h2 className="titulo">Itens do Menu</h2>
        <ul className="lista">
          {menuItems.map(item => (
            <li key={item.id} className="item-menu" onClick={() => abrirModal(item)}>
              <div>
                <h3 className="titulo-item">{item.nome}</h3>
                <img src={item.imagem} alt={item.nome} className="imagem-item" />
                <p className="descricao-item">{item.descricao}</p>
              </div>
              <div className="detalhes-item">
                <p className="preco-item">Preço: R${item.preco}</p>
                <p className="disponibilidade-item">Disponível: {formatarDisponibilidade(item.disponivel)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ModalItemMenu item={itemSelecionado} fecharModal={fecharModal} />
    </>
  );
};

export default ControllaMenu;