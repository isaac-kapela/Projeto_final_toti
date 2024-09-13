import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CriaMenuItem = () => {
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: '',
    imagem: '',
    disponibilidade: true
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/criar', form)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao adicionar item ao menu:', error);
      });
  };

  return (
    <div>
      <h1>Adicionar Item ao Menu</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input type="text" name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} />
        <input type="number" name="preco" placeholder="Preço" value={form.preco} onChange={handleChange} required />
        <input type="text" name="categoria" placeholder="Categoria" value={form.categoria} onChange={handleChange} />
        <input type="text" name="imagem" placeholder="URL da Imagem" value={form.imagem} onChange={handleChange} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default CriaMenuItem;
