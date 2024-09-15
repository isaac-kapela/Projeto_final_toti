import './navBar.css';
import logoClara from "../../assets/logoPizza_clara.png";
import logoEscura from "../../assets/logoPizza_escura.png";
import sol from "../../assets/sol.png";
import lua from "../../assets/lua.png";
import { useState } from 'react';

export default function NavBar({ tema, setTema }) {
  const [navAberta, setNavAberta] = useState(false);

  const mudarTema = () => {
    if (tema === 'light') {
      setTema('dark');
    } else {
      setTema('light');
    }
  }

  const Abrir = () => {
    setNavAberta(!navAberta);
  }

  return (
    <>
      <nav>
        <div className={`navbar ${tema}`}>
          <img className='logo' width="100" height="100" src={tema === 'light' ? logoClara : logoEscura} alt="pizza" />
          <div className={`hamburger ${navAberta ? 'active' : ''}`} onClick={Abrir}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`ul_lista ${navAberta ? 'active' : ''}`}>
            <li className='li_lista'><a href="/home">Home</a></li>
            <li className='li_lista'><a href="#">Menu</a></li>
            <li className='li_lista'><a href="#">Contato</a></li>
            <li className='li_lista'>
              <img className='mudaTema  someResponsiva' onClick={mudarTema} width="30" height="30" src={tema === 'light' ? lua : sol} alt="" />
            </li>
          </ul>
          <img className='mudaTema some' onClick={mudarTema} width="30" height="30" src={tema === 'light' ? lua : sol} alt="" />

        </div>
      </nav>
    </>
  )
}