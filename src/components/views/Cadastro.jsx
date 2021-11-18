import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Cadastro.css";

import { MdEmail, MdLock, MdOutlineElderly, MdPhoneIphone, MdPermIdentity } from "react-icons/md";

import Nebiu from "../../assets/images/logo.gif"
import Logo from "../../assets/images/simbolo.svg"

const Cadastro = () => {
    return (
        <div className="cadastro">
            <img src={Nebiu}  alt="simbolo"  id="logo-Login" />

            <div className="cadastro-right">
                <br />
                <div id="titulo-Cadastro">
                    <img src={Logo} alt="logo"/>
                    <h1> Registro</h1>
                </div>
                <br />
                <form action="/">
                    <div id="area-NomeCadastro">
                        <label className="input-Cadastro">
                            <MdPermIdentity className="svg-Img"/>
                            <input
                                type="text"
                                placeholder="Nome"
                                required
                                />
                        </label>
                        <label className="input-Cadastro">
                            <input
                                className="sobreNome"
                                type="text"
                                placeholder="Sobrenome"
                                required
                                />
                        </label>
                    </div>
                    <label className="input-Cadastro">
                        <MdEmail className="svg-Img"/>
                        <input
                            type="email"
                            placeholder="Digite um email"
                            required
                        />
                    </label>

                    <label className="input-Cadastro">
                        <MdLock className="svg-Img"/>
                        <input
                            type="password"
                            placeholder="Digite uma senha"
                            required
                            minLength="8"
                        />
                    </label>

                    <label className="input-Cadastro">
                        <MdPhoneIphone className="svg-Img"/>
                        <input
                            type="tel"
                            placeholder="Telefone"
                            required
                            maxlength="13"
                        />
                    </label>

                    <label className="input-Cadastro">
                        <MdOutlineElderly className="svg-Img"/>
                        <input
                            type="number"
                            placeholder="Idade"
                            required
                            min='18'
                            max="120"
                        />
                    </label>

                    <div id="container-Genero">
                        <legend id="gen"> Gênero: </legend>
                        <div id="area-Genero">
                            <label for="masculino">
                                <input type="radio" id="masculino" name="genero" required/> 
                                 Masculino
                            </label>

                            <label for="feminino">
                                <input type="radio" id="feminino" name="genero" /> 
                                 Feminino
                            </label>

                            <label for="outros">
                                <input type="radio" id="outros" name="genero" /> 
                                 Outros
                            </label>
                        </div>
                    </div>

                    <br />
                
                    <button type="submit" className="buttonCadastrar"> Criar conta </button>
                    
                    
                    <span id="divisor">
                        Já possui uma conta? 
                        <Link to="/"> Faça login. </Link>
                    </span>
                    <br />

                </form>

            </div>

        </div>
    )
}
export default Cadastro;