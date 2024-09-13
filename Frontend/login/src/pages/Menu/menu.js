import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ControllaMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: '',
    imagem: '',
    disponibilidade: true
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/')
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