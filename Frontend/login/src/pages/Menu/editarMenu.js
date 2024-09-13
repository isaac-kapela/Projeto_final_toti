import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditaMenuItem = () => {
  const { id } = useParams();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/${id}`)
      .then(({ data }) => setForm(data))
      .catch(error => console.error('Erro ao buscar item:', error));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/editar/${id}`, form)
      .then(() => navigate('/'))
      .catch(error => console.error('Erro ao editar item:', error));
  };

  return (
    <div>
      <h1>Editar Item do Menu</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" value={form.nome || ''} onChange={handleChange} placeholder="Nome" required />
        <input type="text" name="descricao" value={form.descricao || ''} onChange={handleChange} placeholder="Descrição" />
        <input type="number" name="preco" value={form.preco || ''} onChange={handleChange} placeholder="Preço" required />
        <input type="text" name="categoria" value={form.categoria || ''} onChange={handleChange} placeholder="Categoria" />
        <input type="text" name="imagem" value={form.imagem || ''} onChange={handleChange} placeholder="URL da Imagem" />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditaMenuItem;
