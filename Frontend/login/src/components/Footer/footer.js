import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="conteudo-footer">
          <h3>Fale Conosco</h3>
          <p>Email: info@exemplo.com</p>
          <p>Telefone: +121 56556 565556</p>
          <p>Endereço: Seu Endereço 123, Rua</p>
        </div>
        <div className="conteudo-footer">
          <h3>Links Rápidos</h3>
          <ul className="lista">
            <li><a href="/">Home</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Sobre</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </div>
        <div className="conteudo-footer">
          <h3>Siga-nos</h3>
          <ul className="icones-sociais">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="barra-inferior">
        <p>&copy; 2024 pizza-toti. Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default footer;
