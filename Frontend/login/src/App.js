import React, { useState, useEffect } from 'react';
import Rotas from './routes/routes';
import './App.css';
import NavBar from './components/NavBar/navBar.js';
import Footer from "./components/Footer/footer.js"

function App() {
  const temaAtual = localStorage.getItem('temaAtual');
  const [tema, setTema] = useState(temaAtual ? temaAtual : 'light');  

  useEffect(() => {
    localStorage.setItem('temaAtual', tema);
  }, [tema]);

  return (
    <>
      <NavBar tema={tema} setTema={setTema} />
      <div className={`container2 ${tema}`}>
        <Rotas />
      </div>
      <Footer tema={tema} />
    </>
  );
}

export default App;