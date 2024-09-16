import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "../pages/Login/login";
import Cadastro from '../pages/cadastro/cadastro';
import Home from '../pages/Home/home';
import Carinho from '../pages/Carinho/carinho';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/carinho" element={<Carinho />} />
    </Routes>
  );
}

export default AppRoutes;