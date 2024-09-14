import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Itens do Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p>Preço: {item.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ControllaMenu;
