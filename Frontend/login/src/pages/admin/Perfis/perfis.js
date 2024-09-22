import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './perfis.css';

export default function Perfis() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const buscarUsuarios = async () => {
      try {
        const resposta = await axios.get('http://localhost:5000/users');
        setUsuarios(resposta.data);
      } catch (erro) {
        console.error('Erro ao buscar usuários:', erro);
      }
    };

    buscarUsuarios();
  }, []);

  return (
    <div className="containerPerfis">
      <h1>Lista de Usuários</h1>
      <p>Total de Usuários: {usuarios.length}</p>
      <ul className='ul_perfil'>
        {usuarios.map(usuario => (
          <li className='li_perfil' key={usuario._id}>
            <span>{usuario.nome}</span>
            <span>{usuario.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}