import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PizzaIMG from "../../assets/login-pizza.jpg";
import Img_fundo from "../../assets/img_fundo.jpg";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const navegar = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/autenticar/login', { email, senha });

      setMessage(response.data.message);
      if (response.status === 200) {
        navegar('/home');
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
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `url(${Img_fundo})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        height: '100vh', 
        width: '100vw',
      }}
    >
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        style={{
          WebkitBoxShadow: '22px 17px 10px 14px rgba(0,0,0,0.75)',
          MozBoxShadow: '22px 17px 10px 14px rgba(0,0,0,0.75)',
          boxShadow: '22px 17px 10px 14px rgba(0,0,0,0.75)',
        }}
      >
        <div className="flex flex-col justify-center p-8 md:p-14">
          <h1 className="text-4xl font-bold mb-3 text-gray-950">Pizza-TOTI</h1>
          <h2 className="font-light text-gray-400 mb-8">Bem-vindo de volta</h2>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <label className="mb-2 text-md block">Endereço de Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="fulano@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
              />
            </div>
            <div className="py-4">
              <label className="mb-2 text-md block">Senha:</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
              />
            </div>
            <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
              Entrar
            </button>
            {message && (
              <p className={`mt-2 ${message.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
            <p className="text-center text-gray-400 mt-4">
              Não tem uma conta? <span className="font-bold text-black cursor-pointer" onClick={() => navegar('/cadastro')}>Cadastre-se</span>
            </p>
          </form>
        </div>
        <div className="relative hidden md:block">
          <img src={PizzaIMG} alt="Mediterranean food" className="w-[400px] h-full rounded-r-2xl object-cover" />
        </div>
      </div>
    </div>
  );
}