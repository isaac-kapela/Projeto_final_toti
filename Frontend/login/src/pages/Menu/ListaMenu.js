import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar itens do menu:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/excluir/${id}`)
      .then(() => {
        setMenuItems(menuItems.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Erro ao excluir item:', error);
      });
  };

  return (
    <div>
      <h1>Itens do Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <p>Preço: {item.preco}</p>
            <Link to={`/editar/${item.id}`}>Editar</Link>
            <button onClick={() => handleDelete(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaMenu;
