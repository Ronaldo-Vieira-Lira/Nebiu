import React from "react";
import "../../assets/css/CardNotificacao.css";

export default function CardNotificacao({ Img, Name, Feito }) {
    return (
        <div id="container-Card">
            <img src={Img} alt="img" />
            <div id="caixa-Acao">
                <h3><span id="nome-Usuario">{Name}</span> {Feito}</h3>
            </div>
        </div>

    );
};