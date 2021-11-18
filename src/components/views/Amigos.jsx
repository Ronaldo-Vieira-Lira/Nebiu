import React from "react";
import "../../assets/css/Amigos.css";

import Header from "../layout/Header";
import ContactCards from "../layout/ContactCards";

export default function Amigos() {
    return (
        <div>
            <Header status={true} />
            <div id="container-Amigos">
                <div id="titulo-Amigos">
                    <h1>Amigos</h1>
                </div>
                <div id="caixa-Amigos">
                    <ContactCards />
                </div>
            </div>
        </div>
    )
}