import React from "react";
import './SobreNos.css';
import ImgSobreNos from "../../assets/imgSobreNos.png";
import { useNavigate } from 'react-router-dom';


const SobreNos = () => {
  const navegar = useNavigate();

  return (
    <>
      <div className="sobre-nos-container">
        <div className="imagem-container">
          <img src={ImgSobreNos} alt="Sobre Nós" className="pizza-imagem" />
        </div>
        <div className="texto-container">
          <div className="textoCT">
            <h2>Sobre nós</h2>
            <p>
              Bem-vindo à nossa pizzaria! Aqui, nós acreditamos que uma boa pizza é mais do que apenas uma refeição – é uma experiência.
              Utilizamos ingredientes frescos e de alta qualidade para criar pizzas deliciosas que agradam a todos os paladares.
              Seja você um amante de sabores clássicos ou alguém que gosta de experimentar combinações inovadoras, temos algo especial para você.
              Venha nos visitar e descubra o sabor autêntico de nossas pizzas artesanais. Estamos ansiosos para recebê-lo!
            </p>
            <ul>
              <li>◾ Saboroso, fresco diariamente</li>
              <li>◾ Melhor pizza da terra</li>
            </ul>
            <div className="botao-container">
              <button className="botao-cardapio" onClick={() => navegar('/home')}>Veja nosso cardápio</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNos;
