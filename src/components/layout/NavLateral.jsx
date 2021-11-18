import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/NavLateral.css";

import Grupo from "../../assets/images/icons/grupo.svg";
import Hashtag from "../../assets/images/icons/hashtag.svg";
import Notifi from "../../assets/images/icons/notificationNav.svg";
import Friends from "../../assets/images/icons/friendsNav.svg";
import Perfil from "../../assets/images/icons/perfil.svg";



export default function Lateral({userImg, userName}) {
    return (
        <aside id="container-Lateral">
            <span id="area-User"> <img src={userImg} alt="img" /> {userName} </span>
            <Link to="/perfil">
                <button type="button" className="btn-Nav">
                    <span><img src={Perfil} alt="img" /></span>
                    Perfil
                </button>
            </Link>
            <Link to="/amigos">
                <button type="button" className="btn-Nav">
                    <span><img src={Friends} alt="img" /></span>
                    Amigos
                </button>
            </Link>
            <Link to="/notificacao">
                <button type="button" className="btn-Nav">
                    <span><img src={Notifi} alt="img" /></span>
                    Notificações
                </button>
            </Link>
            <h3> <span> <img src={Hashtag} alt="img"/> </span> Hashtags em alta </h3>
            <ul className="lista-Nav">
                <li>#Python</li>
                <li>#ReactJs</li>
                <li>#Javascript</li>
                <li>#HTML</li>
                <li>#CSS</li>
            </ul>
            <h3 id="grup-Nav"> <span> <img src={Grupo} alt="img"/> </span> Grupos </h3>
            <ul className="lista-Nav">
                <li>DevMedia <span>🧠</span></li>
                <li>Rocketseat <span>👾</span></li>
                <li>Codigo Fonte <span>☕</span></li>
                <li>Start Recife <span>👨‍💻</span></li>
                <li>Familia <span>👪</span></li>
            </ul>
        </aside>
    );
};