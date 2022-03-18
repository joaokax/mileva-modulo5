import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Passagens from "./views/Passagens";
import Pacotes from "./views/Pacotes";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Usuario from "./views/Usuario";
import UsuarioCreate from "./views/Usuario/Create";
import Destino from "./views/Destino";
import DestinoCreate from "./views/Destino/Create";
import Viagem from "./views/Viagem";
import ViagemCreate from "./views/Viagem/Create";

import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Passagens" element={<Passagens/>} />
        <Route path="/Pacotes" element={<Pacotes/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Usuario" element={<Usuario/>} />
        <Route path="/Usuario-Create" element={<UsuarioCreate/>} />
        <Route path="/Usuario-Update/:id" element={<UsuarioCreate/>} />
        <Route path="/Destino" element={<Destino/>} />
        <Route path="/Destino-Create" element={<DestinoCreate/>} />
        <Route path="/Destino-Update/:id" element={<DestinoCreate/>} />
        <Route path="/Viagem" element={<Viagem/>} />
        <Route path="/Viagem-Create" element={<ViagemCreate/>} />
        <Route path="/Viagem-Update/:id" element={<ViagemCreate/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;