// menu.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ListaMenu from './ListaMenu';
import CriaMenuItem from './Criar';
import EditaMenuItem from './editarMenu';

function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/criar">Adicionar Item</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ListaMenu />} />
        <Route path="/criar" element={<CriaMenuItem />} />
        <Route path="/editar/:id" element={<EditaMenuItem />} />
      </Routes>
    </div>
  );
}

export default Menu;
