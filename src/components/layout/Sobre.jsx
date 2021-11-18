import React from "react";
import DadosUser from "../../assets/data/DadosUser";

import "../../assets/css/Sobre.css";

export default function Sobre() {

    return (

        <div id="container-Sobre">
        
            <legend>Apresentação</legend>
            <div id="caixa-Sobre">
                <h4> Mora no país do { DadosUser.pais } </h4>
                <h4> No estado de { DadosUser.estado } </h4>
                <h4> Gênero { DadosUser.genero } </h4>
                <h4> Aniversário { DadosUser.nascimento } </h4>
                <h4> Telefone { DadosUser.telefone } </h4>
            </div>
        </div>
    );
};