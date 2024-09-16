import React, { useContext } from 'react';
import './carinho.css';
import { CarrinhoContexto } from '../../Context/ItemContext'; 

export default function Carinho() {
  const { itensDoCarrinho } = useContext(CarrinhoContexto);

  let total = 0;
  for (let i = 0; i < itensDoCarrinho.length; i++) {
    total += itensDoCarrinho[i].preco;
  }

  return (
    <div className="carinho-container">
      <header className="carinho-header">
        <h1>Meu Carrinho</h1>
      </header>
      <ul className="carinho-lista">
        {itensDoCarrinho.length ? (
          itensDoCarrinho.map((item, index) => (
            <li key={index} className="carinho-item">
              {item.nome} - R${item.preco}
            </li>
          ))
        ) : (
          <p>O carrinho está vazio</p>
        )}
      </ul>
      <footer className="carinho-footer">
        <div className="preco-total">Total: R${total}</div>
        <button className="btn-fina">Finalizar Compra</button>
      </footer>
    </div>
  );
}