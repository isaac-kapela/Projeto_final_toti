import React, { createContext, useState } from 'react';

export const CarrinhoContexto = createContext();

export const ProvedorDeItens = ({ children }) => {
  const [itensDoCarrinho, setItensDoCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    setItensDoCarrinho([...itensDoCarrinho, item]);
  };

  return (
    <CarrinhoContexto.Provider value={{ itensDoCarrinho, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContexto.Provider>
  );
};