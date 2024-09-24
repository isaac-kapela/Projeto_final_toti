import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  peopleOutline,
  cartOutline,
  statsChartOutline,
x} from "ionicons/icons";

const BarraLateral = () => {
  const [estaAberto, setEstaAberto] = useState(false);
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  const itensMenu = [
    { icone: homeOutline, texto: "dashboard", cor: "#c60000", caminho: "/dashboard" },
    { icone: peopleOutline, texto: "Perfis", cor: "#ffa117", caminho: "/perfis" },
    { icone: cartOutline, texto: "Produtos", cor: "#c60000", caminho: "/Produtos" },
    { icone: statsChartOutline, texto: "Quantidade", cor: "#ffa117", caminho: "/quantidade" },
  ];

  const alternarMenu = () => setEstaAberto(!estaAberto);

  const handleMenuClick = (indice) => {
    setIndiceAtivo(indice);
  };

  return (
    <div className={`navegacao ${estaAberto ? "open" : ""}`}>
      <div className="alternar_menu" onClick={alternarMenu}></div>
      <ul>
        {itensMenu.map((item, indice) => (
          <li
            key={indice}
            className={`lista ${indiceAtivo === indice ? "ativa" : ""}`}
            style={{ "--clr": item.cor }}
            onClick={() => handleMenuClick(indice)}
          >
            <Link to={item.caminho}>
              <span className="icone">
                <IonIcon icon={item.icone} />
              </span>
              <span className="texto">{item.texto}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarraLateral;