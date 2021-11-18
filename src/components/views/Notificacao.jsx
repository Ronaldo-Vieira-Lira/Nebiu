import React from "react";
import "../../assets/css/Notificacao.css";

import Header from "../../components/layout/Header";
import ListCardNoti from "../layout/ListCardNoti";

export default function Notificacao() {
   
    return (
        <>
            <Header status={true}/>
            <div id="conteiner-Notificacao">
                <div id="caixa-Notificacao">
                    <div id="titulo-Notificacao">
                        <h1>Notificações</h1>
                    </div>
                    <ListCardNoti />
                </div>
            </div>
        </>
    );
};