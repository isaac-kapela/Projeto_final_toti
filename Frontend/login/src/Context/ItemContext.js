import React, { createContext, useState, useEffect } from 'react';

export const CarrinhoContexto = createContext();

export const ProvedorDeItens = ({ children }) => {
  const [itensDoCarrinho, setItensDoCarrinho] = useState(() => {
    const itensSalvos = localStorage.getItem('itensDoCarrinho');
    return itensSalvos ? JSON.parse(itensSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('itensDoCarrinho', JSON.stringify(itensDoCarrinho));
  }, [itensDoCarrinho]);

  const adicionarAoCarrinho = (item) => {
    setItensDoCarrinho((prevItens) => [...prevItens, item]);
  };

  return (
    <CarrinhoContexto.Provider value={{ itensDoCarrinho, setItensDoCarrinho, adicionarAoCarrinho }}>
      {children}
    </CarrinhoContexto.Provider>
  );
};