import './navBar.css';
import logoClara from "../../assets/logoPizza_clara.png";
import logoEscura from "../../assets/logoPizza_escura.png";
import sol from "../../assets/sol.png";
import lua from "../../assets/lua.png";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ tema, setTema }) {
  const [navAberta, setNavAberta] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const emailAdmin = "dizolelekapela@gmail.com";
    const email = localStorage.getItem('email');
    if (email === emailAdmin) {
      setIsAdmin(true);
    }
  }, []);

  const mudarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  const abrirNav = () => {
    setNavAberta(!navAberta);
  };

  return (
    <>
      <nav>
        <div className={`navbar ${tema}`}>
          <img className='logo' width="100" height="100" src={tema === 'light' ? logoClara : logoEscura} alt="pizza" />
          <div className={`hamburger ${navAberta ? 'active' : ''}`} onClick={abrirNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`ul_lista ${navAberta ? 'active' : ''}`}>
            <li className='li_lista'><Link to="/home">Home</Link></li>
            <li className='li_lista'><Link to="/carinho">Carinho</Link></li>
            {isAdmin && <li className='li_lista'><Link to="/dashboard">Dashboard</Link></li>}
            <li className='li_lista'><Link to="/SobreNos">Sobre-nos</Link></li>
            <li className='li_lista'>
              <img className='mudaTema someResponsiva' onClick={mudarTema} width="30" height="30" src={tema === 'light' ? lua : sol} alt="" />
            </li>
          </ul>
          <img className='mudaTema some' onClick={mudarTema} width="30" height="30" src={tema === 'light' ? lua : sol} alt="" />
        </div>
      </nav>
    </>
  );
}