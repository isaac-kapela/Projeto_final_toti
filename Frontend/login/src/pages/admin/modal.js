import React from 'react';
import './modal.css';

export default function Modal({ modalAberto, fecharModal, children }) {
  if (!modalAberto) return null;

  return (
    <div className="modal">
      <div className="modal-conteudo">
        <button className="modal-fechar" onClick={fecharModal}>X</button>
        {children}
      </div>
    </div>
  );
}