import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./assets/css/index.css"
import App from "./components/views/App";
import Cadastro from './components/views/Cadastro';
import Feed from "./components/views/Feed";
import Perfil from "./components/views/Perfil";
import Amigos from "./components/views/Amigos";
import Notificacao from "./components/views/Notificacao";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/amigos" element={<Amigos />} />
        <Route path="/notificacao" element={<Notificacao />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

