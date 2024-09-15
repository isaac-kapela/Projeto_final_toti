import './navBar.css';
import logoClara from "../../assets/logoPizza_clara.png";
import logoEscura from "../../assets/logoPizza_escura.png";
import sol from "../../assets/sol.png";
import lua from "../../assets/lua.png";

export default function NavBar({ tema, setTema }) {

  const mudarTema = () => {
    if (tema === 'light') {
      setTema('dark');
    } else {
      setTema('light');
    }
  }

  return (
    <>
      <nav>
        <div className={`navbar ${tema}`}>
          <img className='logo' width="100" height="100" src={tema === 'light' ? logoClara : logoEscura} alt="pizza" />
          <ul className='ul_lista'>
            <li className='li_lista'><a href="/home">Home</a></li>
            <li className='li_lista'><a href="/menu">Menu</a></li>
            <li className='li_lista'><a href="/contato">Contato</a></li>
          </ul>
          <img className='mudaTema' onClick={mudarTema} width="30" height="30" src={tema === 'light' ? lua : sol} alt="" />
        </div>
      </nav>
    </>
  )
}