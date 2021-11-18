import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/PerfilUser.css";
import DadosUser from "../../assets/data/DadosUser";

import Sobre from "../layout/Sobre";
import Post from "../layout/Post";
import Fotos from "./Fotos";

export default function PerfilUser() {
    return (
        <div id="container-Perfiluser">
            <div className="flex-column">
                <img src={DadosUser.img} alt="usuario imagem" id="img-PerfilUser"/>
                <h1>{DadosUser.nome}</h1>
                <div id="info-Perfil">
                    <h4> <span>3</span> publicações</h4>
                    <Link to="/amigos">
                        <h4> <span>24</span> amigos</h4>
                    </Link>
                </div>
            </div>

            <section id="conteudo">   
                
                    <div id="controle-Informacao">
                        <Sobre />
                        <Fotos />
                    </div>

                    <section id="controle-Post">

                        <Post 
                            imgPost={`https://source.unsplash.com/user/erondu/1200x${Math.floor(Math.random() * (800 - 400 + 1) + 400)}`} 
                            
                            nameUser={DadosUser.nome} 

                            desction="Minha Publicaçao" 
                            
                            imgUser={ DadosUser.img }
                        />
                        <Post 
                            imgPost={`https://source.unsplash.com/user/erondu/1200x${Math.floor(Math.random() * (800 - 400 + 1) + 400)}`} 
                            
                            nameUser={DadosUser.nome} 
                            
                            desction="Minha Publicaçao" 
                            
                            imgUser={ DadosUser.img }
                        />
                        <Post 
                            imgPost={`https://source.unsplash.com/user/erondu/1200x${Math.floor(Math.random() * (800 - 400 + 1) + 400)}`} 
                            
                            nameUser={DadosUser.nome} 
                            
                            desction="Minha Publicaçao" 

                            imgUser={ DadosUser.img }
                        />
                    </section>
            </section>
        </div>
    );
};