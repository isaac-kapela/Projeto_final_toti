import React, { useState } from 'react';
import axios from 'axios';
import "./paginaPrivada.css";

export default function Paginaprivada({ setMenuItems, menuItems }) {
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: '',
    imagem: '',
    disponibilidade: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/criar', form)
      .then(response => {
        setMenuItems([...menuItems, response.data]);
        setForm({
          nome: '',
          descricao: '',
          preco: '',
          categoria: '',
          imagem: '',
          disponibilidade: false
        });
      })
      .catch(error => {
        console.error('Erro ao adicionar item ao menu:', error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formulario">
        <h2 className="titulo">Adicionar Item ao Menu</h2>
        <input type="text" name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required className="campo-input" />
        <input type="text" name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição" className="campo-input" />
        <input type="number" name="preco" value={form.preco} onChange={handleChange} placeholder="Preço" required className="campo-input" />
        <input type="text" name="categoria" value={form.categoria} onChange={handleChange} placeholder="Categoria" className="campo-input" />
        <input type="text" name="imagem" value={form.imagem} onChange={handleChange} placeholder="Imagem" className="campo-input" />
        <label className="rotulo-checkbox">
          Disponível:
          <input type="checkbox" name="disponibilidade" checked={form.disponibilidade} onChange={handleChange} className="input-checkbox" />
        </label>
        <button type="submit" className="botao-submit">Adicionar Item</button>
      </form>
    </div>
  );
}
