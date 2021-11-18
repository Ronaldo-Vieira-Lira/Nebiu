import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../../assets/css/Header.css"

import DadosUser from "../../assets/data/DadosUser";

import Icon from "../../assets/images/simbolo.svg";
import Home from "../../assets/images/icons/home.svg";
import Friends from "../../assets/images/icons/friends.svg";
import Notifi from "../../assets/images/icons/notification.svg";
import Saida from "../../assets/images/icons/door.svg";

export default function Header({ status }) {  
    let alterna = status  
    const [chave] = useState(alterna)
    
    return (
        <header id="header-Feed">

            <Link to="/feed">
                <button className="btnImg-Header">
                    <img src={Icon} className="img-Perfil" alt="img"/>
                </button>
            </Link>

            <div className="flex-Gap">
                <Link to="/feed">
                    <button type="button" className="btnImg-Header">
                        <img src={Home} alt="Home" title="Home" className="img-Header"/>
                    </button>
                </Link>
                <Link to="/amigos">
                    <button type="button" className="btnImg-Header">
                        <img src={Friends} alt="Amigos" title="Amigos" className="img-Header"/>
                    </button>
                </Link>

                <Link to="/notificacao">
                    <button type="button" className="btnImg-Header">
                        <img src={Notifi} alt="Notificação" title="Notificações" className="img-Header"/>
                    </button>
                </Link>
                <Link to="/">
                    <button type="button" className="btnImg-Header">
                        <img src={Saida} alt="Saida" title="Sair" className="img-Header"/>
                    </button>
                </Link>
                
                {
                    chave ?
                        <Link to="/perfil">
                            <button type="button" className="btnImg-Header">
                                <img src={ DadosUser.img } className="img-Perfil" alt="Perfil" title="Perfil"/>
                            </button>
                        </Link>
                    : null
                }
            </div>
        </header>
    );
};