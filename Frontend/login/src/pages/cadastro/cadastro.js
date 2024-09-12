import React, { useState } from 'react';
import axios from 'axios';
import * as S from './cadastro_style';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setMessage('As senhas não são iguais.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/autenticar/registrar', {
        nome,
        email,
        senha,
        confirmarSenha, 
      });

      setMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Ocorreu um erro no cadastro. Tente novamente.');
      }
    }
  };

  return (
    <>
      <S.Style_cadastro>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>Cadastro</h2>
            
            <label>Nome:</label>
            <input 
              type="text" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              required 
            />

            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />

            <label>Senha:</label>
            <input 
              type="password" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              required 
              autoComplete="new-password" 
            />

            <label>Confirmar Senha:</label>
            <input 
              type="password" 
              value={confirmarSenha} 
              onChange={(e) => setConfirmarSenha(e.target.value)} 
              required 
              autoComplete="new-password" 
            />

            <button type="submit" style={{ marginTop: '10px' }}>Registrar</button>

            {message && <p style={{ color: message.includes('sucesso') ? 'green' : 'red', marginTop: '10px' }}>{message}</p>}
          </form>
        </div>
      </S.Style_cadastro>
    </>
  );
}