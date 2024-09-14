import React, { useState } from 'react';
import axios from 'axios';
import imgPizza from "../../assets/login-pizza.jpg";
import Img_fundo from "../../assets/img_fundo.jpg";

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setMensagem('As senhas não são iguais.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/autenticar/registrar', {
        nome,
        email,
        senha,
        confirmarSenha,
      });

      setMensagem(response.data.message);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setMensagem(error.response.data.message);
      } else {
        setMensagem('Ocorreu um erro no cadastro. Tente novamente.');
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${Img_fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        opacity: 2.00,
      }}
    >

<div className="flex items-center justify-center min-h-screen py-8 px-4"
        style={{
          WebkitBoxShadow: '22px 17px 10px 14px rgba(0,0,0,0.75)',
          MozBoxShadow: '22px 17px 10px 14px rgba(0,0,0,0.75)',
          boxShadow: '22px 17px 10px 14px rgba(0,0,0,0.75)',
        }}
      >
        
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-lg rounded-2xl md:flex-row md:space-y-0 max-w-4xl mx-auto">
          <div className="relative hidden md:block">
            <img src={imgPizza} alt="Imagem de ilustração" className="w-[300px] h-full rounded-l-2xl object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <h1 className="text-3xl font-bold mb-3">Pizza toti</h1>
            <h2 className="font-light text-gray-400 mb-6">Crie sua conta</h2>
            <form onSubmit={handleSubmit}>
              <div className="py-3">
                <label className="mb-2 text-md block">Nome:</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  placeholder="fulano"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-3">
                <label className="mb-2 text-md block">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="fulano@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-3">
                <label className="mb-2 text-md block">Senha:</label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <div className="py-3">
                <label className="mb-2 text-md block">Confirmar Senha:</label>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>
              <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Registrar
              </button>
              {mensagem && (
                <p
                  className={`mt-2 ${mensagem.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}
                >
                  {mensagem}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
