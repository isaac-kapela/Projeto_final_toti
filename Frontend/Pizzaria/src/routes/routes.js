import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Cadastro from "../pages/cadastro/cadastro";
import Home from "../pages/Home/home";
import Carinho from "../pages/Carinho/carinho";
import LandingPage from "../pages/LandingPage/landigPage";
import RotasPrivadas from "./rotasPrivadas";
import Dashboard from "../pages/admin/Dashboard/dashboard";
import Nao44 from "../pages/404-ERRO/NaoEcontrado";
import Perfis from "../pages/admin/Perfis/perfis";
import Produtos from "../pages/admin/produtos/produtos";
import SobreNos from "../pages/SobreNos/SobreNos";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Nao44 />} />

      <Route
        path="/home"
        element={
          <RotasPrivadas>
            <Home />
          </RotasPrivadas>
        }
      />
      <Route
        path="/carinho"
        element={
          <RotasPrivadas>
            <Carinho />
          </RotasPrivadas>
        }
      />

      <Route
        path="/dashboard"
        element={
          <RotasPrivadas>
            <Dashboard />
          </RotasPrivadas>
        }
      />
      <Route
        path="/SobreNos"
        element={
          <RotasPrivadas>
            <SobreNos />
          </RotasPrivadas>
        }
      />

      <Route
        path="/perfis"
        element={
          <RotasPrivadas>
            <Perfis />
          </RotasPrivadas>
        }
      />

      <Route
        path="/produtos"
        element={
          <RotasPrivadas>
            <Produtos />
          </RotasPrivadas>
        }
      />
    </Routes>


  );
}

export default AppRoutes;