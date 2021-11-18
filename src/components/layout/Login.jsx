import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Login.css";

import Icon from "../../assets/images/simbolo.svg";
import Logo from "../../assets/images/logo.gif";
import Info from "../../assets/images/icons/info.svg";
import Close from "../../assets/images/icons/close.svg";

export default function Login() {
    const [acao, setAcao] = useState()

    const [openClose, setOpenClose] = useState(false)
    const [erro, setErro] = useState(false)
    const [invalido, setInvalido] = useState(false)
    const [esqueceu, setEsqueceu] = useState(false)

    const funcao = (usuario, senha) => {
        if(usuario === "" || senha === "") {
            setErro(true)
        } else if (usuario === "pablosilva@gmail.com" && senha === "pablo123") {
            setAcao("/feed")
        } else if (usuario !== "pablosilva@gmail.com" && senha !== "pablo123") {
            setInvalido(true)
        }
    };
    return (
        <div className="container-Login">
            <img src={Logo} alt="foto" id="img-Logo" />
            <div id="container-Form">
                {
                    esqueceu ?
                        <div className="area-Informacao">
                            <h3 className="color-Red green">
                                Um código de recuperação foi enviado ao seu e-mail.
                                <span onClick={() => setEsqueceu(false)}>
                                    <img src={Close} alt="img"/>
                                </span>
                            </h3>
                        </div>
                    : null    
                }
                {
                    invalido ?
                        <div className="area-Informacao">
                            <h3 className="color-Red yellow">
                                Por favor click no icone de informação para ter acesso ao dados de cadastro.
                                <span onClick={() => setInvalido(false)}>
                                    <img src={Close} alt="img"/>
                                </span>
                            </h3>
                        </div>
                    : null    
                }
                {
                    erro ?
                        <div className="area-Informacao">
                            <h3 className="color-Red">
                                Por favor preencha todos os campos!
                                <span onClick={() => setErro(false)}>
                                    <img src={Close} alt="img"/>
                                </span>
                            </h3>
                        </div>
                    : null    
                }
                {
                    openClose ?
                    <div className="area-Informacao" >
                        <h1 className="login">Informações
                            <span onClick={() => setOpenClose(false)}>
                                <img src={Close} alt="img"/>
                            </span>
                        </h1>
                        <p>Para realizar login preencha os campos de E-mail e Senha de acordo com o exemplo abaixo:</p>
                        <div id="dados-Login">
                            <h4>
                                E-mail: <span className="color-Df"> pablosilva@gmail.com</span>
                            </h4>
                            <h4>
                                Senha: <span className="color-Df">pablo123</span>
                            </h4>
                        </div>
                    </div>
                    : null
                }
                <div className="caixa-Form" >

                    <div id="titulo-Login">
                        <img src={Icon} alt="img"/>

                        <h1 className="login">
                            Login
                            <span onClick={() => setOpenClose(true)}>
                                <img src={Info} alt="Informação"/>
                            </span>
                        </h1>
                    </div>

                    <form action={acao} id="form">
                        <input
                            placeholder="E-mail"
                            type="email"
                            id="user"
                            required
                        />
                        <input
                            placeholder="Senha"
                            type="password"
                            id="senha"
                            required
                        />

                        <button type="button" className="esqueceu" onClick={() => setEsqueceu(true)}> Esqueceu a senha? Clique aqui </button>
                        
                        <button type="submit" id="btn-Login" onClick={() => {
                            funcao(document.getElementById("user").value, document.getElementById("senha").value)
                        }}>Entrar</button>
                        
                    </form>

                    <p className="linha">
                        Não tem uma conta?
                        <Link to="/cadastro" id="btn-cadast"> Cadastre-se </Link>
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};