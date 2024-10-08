import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/routes';
import './App.css';
import NavBar from './components/NavBar/navBar.js';
import Footer from "./components/Footer/footer.js";
import { ProvedorDeItens } from './Context/ItemContext';

function App() {
  const localizacao = useLocation();
  const temaAtual = localStorage.getItem('temaAtual');
  let temaInicial;
  if (temaAtual !== null) {
    temaInicial = temaAtual;
  } else {
    temaInicial = 'light';
  }
  
  const [tema, setTema] = useState(temaInicial);
  useEffect(() => {
    localStorage.setItem('temaAtual', tema);
  }, [tema]);

  const telaproibida = localizacao.pathname === '/login' || localizacao.pathname === '/' || localizacao.pathname === '/cadastro';

  return (
    <ProvedorDeItens> 
      {!telaproibida && <NavBar tema={tema} setTema={setTema} />}
      <div className={`container2 ${tema}`}>
        <AppRoutes />
      </div>
      {!telaproibida && <Footer tema={tema} />}
    </ProvedorDeItens>
  );
}

export default App;