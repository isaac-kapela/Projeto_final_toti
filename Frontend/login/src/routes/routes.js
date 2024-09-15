
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../pages/Login/login";
import Cadastro from '../pages/cadastro/cadastro';
import Home from '../pages/Home/home';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;