import React from 'react';
import './carinho.css';

export default function Carinho() {
  return (
    <div className="carinho-container">
      <header className="carinho-header">
        <h1>Meu Carinho</h1>
      </header>
      <ul className="carinho-lista">
        <li className="carinho-item">Item 1 - R$10.00</li>
        <li className="carinho-item">Item 2 - R$20.00</li>
        <li className="carinho-item">Item 3 - R$30.00</li>
      </ul>
      <footer className="carinho-footer">
        <div className="preco-total">Total: R$60.00</div>
        <button className="btn-fina">Finalizar Compra</button>
      </footer>
    </div>
  );
}