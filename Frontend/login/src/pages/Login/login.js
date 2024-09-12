import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './login_style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/autenticar/login', {
        email,
        senha,
      });

      setMessage(response.data.message);
      if (response.data.success) {
        navigate('/home');
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Ocorreu um erro no login. Tente novamente.');
      }
    }
  };

  return (
    <>
      <S.Style_Login>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <h2>Login</h2>

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
              autoComplete="current-password" 
            />

            <button className='btn-Entar' type="submit" style={{ marginTop: '10px' }}>Entrar</button>

            {message && <p style={{ color: message.includes('sucesso') ? 'green' : 'red', marginTop: '10px' }}>{message}</p>}

            <span type="button" onClick={() => navigate('/cadastro')} style={{ marginTop: '10px' }}>
              Não tem uma conta?  <span className='cadastro-se'>Cadastre-se</span>
            </span>
          </form>
        </div>
      </S.Style_Login>
    </>
  );
}