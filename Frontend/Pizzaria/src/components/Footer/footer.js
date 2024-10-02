import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';


const Footer = ({ tema }) => {
  return (
    <footer className={tema}>
      <div className="containerFooter">
        <div className="conteudo-footer">
          <h3>Fale Conosco</h3>
          <p>Email: info@gmail.com</p>
          <p>Telefone: +55 1134465-5630</p>
          <p>Endereço: toti toti 123, Rua</p>
        </div>
        <div className="conteudo-footer">
          <h3>Links </h3>
          <ul className="lista">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/carinho">Carinho</Link></li>
          <li><Link to="/SobreNos">Sobre-nos</Link></li>
          </ul>
        </div>
        <div className="conteudo-footer">
          <h3>Siga-nos</h3>
          <ul className="icones-sociais">
            <li><a href="https://www.facebook.com/toti.diversidade" target="_blank"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/toti.diversidade/" target="_blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/school/toti-diversidade/posts/?feedView=all" target="_blank"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="barra-inferior">
        <p>&copy; 2024 pizza-toti. Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;