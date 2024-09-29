import React, { useContext, useEffect, useState } from 'react';
import './carinho.css';
import { CarrinhoContexto } from '../../Context/ItemContext'; 
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

export default function Carinho() {
  const { itensDoCarrinho, setItensDoCarrinho } = useContext(CarrinhoContexto);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let NovoTotal = 0;
    for (let i = 0; i < itensDoCarrinho.length; i++) {
      NovoTotal += itensDoCarrinho[i].preco * itensDoCarrinho[i].quantidade;
    }
    setTotal(NovoTotal);
  }, [itensDoCarrinho]);

  const handleDelete = (id) => {
    setItensDoCarrinho(itensDoCarrinho.filter(item => item.id !== id));
    console.log('Item removido do carrinho:', id);
  };

  const handleSomar = (id) => {
    setItensDoCarrinho(itensDoCarrinho.map(item => 
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    ));
  };

  const handleSubtrair = (id) => {
    setItensDoCarrinho(itensDoCarrinho.map(item => 
      item.id === id && item.quantidade > 1 ? { ...item, quantidade: item.quantidade - 1 } : item
    ));
  };

  return (
    <div className="carinho-container">
      <header className="carinho-header">
        <h1>Meu Carrinho</h1>
      </header>
      <ul className="carinho-lista">
        {itensDoCarrinho.length ? (
          itensDoCarrinho.map((item, index) => (
            <li key={index} className="carinho-item">
              <span>{item.nome} - R${item.preco}:  <span className='quantidade'>{item.quantidade}</span></span>
              <div className="item-actions">
                <FaMinus 
                  className="action-icon" 
                  onClick={() => handleSubtrair(item.id)} 
                />
                <FaPlus 
                  className="action-icon" 
                  onClick={() => handleSomar(item.id)} 
                />
                <FaTrash 
                  className="action-icon" 
                  onClick={() => handleDelete(item.id)} 
                />
              </div>
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