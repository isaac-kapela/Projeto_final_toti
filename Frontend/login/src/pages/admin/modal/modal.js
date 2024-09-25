import React, { useState } from 'react';
import './modal.css';
export default function Modal({ produto, onClose, onSave }) {
  const [produtoEditado, setProdutoEditado] = useState(produto);

  const handleSave = () => {
    onSave(produtoEditado);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Editar Produto</h2>
        <input
          type="text"
          placeholder="Nome do produto"
          className="campo-input"
          value={produtoEditado.nome}
          onChange={(e) =>
            setProdutoEditado({ ...produtoEditado, nome: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Descrição"
          className="campo-input"
          value={produtoEditado.descricao}
          onChange={(e) =>
            setProdutoEditado({ ...produtoEditado, descricao: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Preço"
          className="campo-input"
          value={produtoEditado.preco}
          onChange={(e) =>
            setProdutoEditado({ ...produtoEditado, preco: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Categoria"
          className="campo-input"
          value={produtoEditado.categoria}
          onChange={(e) =>
            setProdutoEditado({ ...produtoEditado, categoria: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Imagem (URL)"
          className="campo-input"
          value={produtoEditado.imagem}
          onChange={(e) =>
            setProdutoEditado({ ...produtoEditado, imagem: e.target.value })
          }
        />
        <label>
          Disponibilidade:
          <input
            type="checkbox"
            checked={produtoEditado.disponibilidade}
            onChange={(e) =>
              setProdutoEditado({
                ...produtoEditado,
                disponibilidade: e.target.checked,
              })
            }
          />
        </label>
        <button className="botao-salvar" onClick={handleSave}>
          Salvar
        </button>
      </div>
    </div>
  );
}