import React from "react";
import './landigPage.css';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {
    const navegar = useNavigate();
    navegar('/');
  return (
    <main id="content">
      <section id="home">
        <div className="shape"></div>
        <div id="cta">
          <h1 className="title">
            O sabor da sua <span>ESCOLHA</span>
          </h1>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
          </p>

          <div id="cta_buttons">
            <a  className="btn-default"  onClick={() => navegar('/login')}>
              Ver cardápio
            </a>

            <a href="tel:+55555555555" id="phone_button">
              <button className="btn-default">
                <FaPhone />
              </button>
              (xx) xxxxx-xxxx
            </a>
          </div>

          <div className="social-media-buttons">
            <a href="">
              <FaWhatsapp />
            </a>

            <a href="">
              <FaInstagram />
            </a>

            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div id="banner">
          <img src="images/pizza.jpg" alt="Pizza" />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
