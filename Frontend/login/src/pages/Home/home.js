import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./home.css";
import NavBar from "../../components/NavBar/navBar.js";

const ControllaMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens do menu:', error);
      });
  }, []);


  return (
    <>
      <h2 className="titulo">Itens do Menu</h2>
      <ul className="lista">
        {menuItems.map(item => (
          <li key={item.id} className="item-menu">
            <div>
              <h3 className="titulo-item">{item.nome}</h3>
              <p className="descricao-item">{item.descricao}</p>
            </div>
            <div className="detalhes-item">
              <p className="preco-item">Preço: {item.preco}</p>
              <p className="disponibilidade-item">Disponível: {item.disponivel ? "Sim" : "Não"}</p>
            </div>
          </li>
          
          
        ))}
      </ul>
    </>
  );
};

export default ControllaMenu;
