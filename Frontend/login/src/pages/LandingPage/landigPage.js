import React, { useState } from "react";
import './landigPage.css';
import { FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import IMGLandingPage from "../../assets/imgLanding.png";
import IMGICON from "../../assets/Icones-Landpage.png";
import marguerita from "../../assets/marguerita.jpeg";
import pepperoni from "../../assets/PizzaPepe.jpeg";
import quatroQueijos from "../../assets/quatroQueijo.jpeg";
import portuguesa from "../../assets/portuguesa.jpeg";
import Footer from "../../components/Footer/footer"
const LandingPage = () => {
    const navegar = useNavigate();
    const [menuItems] = useState([
        {
            id: 1,
            nome: "Pizza Margherita",
            descricao: "Molho de tomate, mussarela, manjericão",
            preco: 25.00,
            imagem: marguerita
        },
        {
            id: 2,
            nome: "Pizza Pepperoni",
            descricao: "Molho de tomate, mussarela, pepperoni",
            preco: 30.00,
            imagem: pepperoni
        },
        {
            id: 3,
            nome: "Pizza Quatro Queijos",
            descricao: "Molho de tomate, mussarela, gorgonzola, parmesão, provolone",
            preco: 35.00,
            imagem: quatroQueijos
        },
        {
            id: 4,
            nome: "Pizza Portuguesa",
            descricao: "Molho de tomate, mussarela, presunto, ovo, cebola, azeitona",
            preco: 28.00,
            imagem: portuguesa
        }
    ]);

    return (
        <>
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
                            <a className="btn-default" onClick={() => navegar('/login')}>
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
                            <span>
                                <img src={IMGICON} alt="Social Icon" />
                            </span>
                            <span>
                                <img src={IMGICON} alt="Social Icon" />
                            </span>
                            <span>
                                <img src={IMGICON} alt="Social Icon" />
                            </span>
                        </div>
                    </div>

                    <div id="banner">
                        <img src={IMGLandingPage} alt="Landing Page" />
                    </div>
                </section>

                <section id="menu">
                    <div id="pizzas">
                        {menuItems.map(item => (
                            <div key={item.id} className="pizza">
                                <div className="pizza-heart">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <img src={item.imagem} className="pizza-image" alt={item.nome} />
                                <h3 className="pizza-title">{item.nome}</h3>
                                <span className="pizza-description">{item.descricao}</span>
                                <div className="pizza-rate">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="pizza-price">
                                    <h4>R${item.preco}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer className= "footerLanding" />
        </>

    );
};

export default LandingPage;