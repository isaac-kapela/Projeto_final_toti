import React, { useState } from "react";
import "./sideBar.css";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  peopleOutline,
  cartOutline,
  statsChartOutline,
  settingsOutline,
} from "ionicons/icons";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: homeOutline, text: "Home", color: "#c60000" },
    { icon: peopleOutline, text: "Perfis", color: "#ffa117" },
    { icon: cartOutline, text: "Produtos", color: "#c60000" },
    { icon: statsChartOutline, text: "Quantidade", color: "#ffa117" },
    { icon: settingsOutline, text: "Configurações", color: "#c60000" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`navegacao ${isOpen ? "open" : ""}`}>
      <div className="alternar_menu" onClick={toggleMenu}></div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`lista ${activeIndex === index ? "ativa" : ""}`}
            style={{ "--clr": item.color }}
            onClick={() => handleMenuClick(index)}
          >
            <a href="#">
              <span className="icon">
                <IonIcon icon={item.icon} />
              </span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;