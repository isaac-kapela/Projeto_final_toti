import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/routes';
import './App.css';
import NavBar from './components/NavBar/navBar.js';
import Footer from "./components/Footer/footer.js";

function App() {
  const location = useLocation();
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

  const telaproibida = location.pathname === '/login' || location.pathname === '/' || location.pathname === '/cadastro';

  return (
    <>
      {!telaproibida && <NavBar tema={tema} setTema={setTema} />}
      <div className={`container2 ${tema}`}>
        <AppRoutes />
      </div>
      {!telaproibida && <Footer tema={tema} />}
    </>
  );
}

export default App;