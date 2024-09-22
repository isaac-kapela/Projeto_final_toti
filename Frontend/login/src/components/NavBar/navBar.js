import './navBar.css';
import logoClara from "../../assets/logoPizza_clara.png";
import logoEscura from "../../assets/logoPizza_escura.png";
import sol from "../../assets/sol.png";
import lua from "../../assets/lua.png";
import { useState } from 'react';

// import imgAddClara from "../../assets/img_add_claro.png";
// import imgAddEscura from "../../assets/img_add_escuro.png";
// import Modal from '../../pages/admin/modal';
// import Paginaprivada from '../../pages/admin/Paginaprivada';
import { Link } from 'react-router-dom';

export default function NavBar({ tema, setTema }) {
  const [navAberta, setNavAberta] = useState(false);
  // const [modalAberto, setModalAberto] = useState(false);

  const mudarTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };
  const abrirNav = () => {
    setNavAberta(!navAberta);
  };
  
  // const abrirModal = () => {
  //   setModalAberto(true);
  // };
  
  // const fecharModal = () => {
  //   setModalAberto(false);
  // };
  
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
            <li className='li_lista'><Link to="/dashboard">Dashboard</Link></li>
            <li className='li_lista'><Link to="">Sobre-nos</Link></li>

            <li className='li_lista'>
              <img className='mudaTema someResponsiva' onClick={mudarTema} width="30" height="30" src={tema === 'light' ? lua : sol} alt="" />
            </li>
          </ul>
          <img className='mudaTema some' onClick={mudarTema} width="30" height="30" src={tema === 'light' ? lua : sol} alt="" />
            
          {/* <img className='img_add some' src={tema === 'light' ? imgAddEscura : imgAddClara} alt="" onClick={abrirModal} style={{marginLeft: "10px"}} /> */}
        </div>
      </nav>
      {/* <Modal modalAberto={modalAberto} fecharModal={fecharModal}>
        <Paginaprivada setMenuItems={() => {}} menuItems={[]} />
      </Modal> */}
    </>
  );
}