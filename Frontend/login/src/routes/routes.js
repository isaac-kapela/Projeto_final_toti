//AppRoutes

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/Login/login";
import Cadastro from '../pages/cadastro/cadastro';
import Menu from '../pages/Menu/menu';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;