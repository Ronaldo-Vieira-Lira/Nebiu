import React from "react";
import "../../assets/css/Patrocinio.css";
import RandPatri from "../../assets/data/RandomPatrocinio"

export default function Patrocinio() {

    var numeros = [];
    while (numeros.length < 3) {
        let aleatorio = Math.floor(Math.random() * 11);
        if (numeros.indexOf(aleatorio) === -1) {
            numeros.push(aleatorio);
        }
    }
    return (
        <aside id="container-Patrocinio">
            <h3>Patrocínio</h3>
            <a href={RandPatri[numeros[0]].url} target="_blank" className="link-Patrocinio">
                <div className="caixa-Patrocinio">
                    <div className="caixaimg-Patro">
                        <img src={RandPatri[numeros[0]].img} alt="" className="imgs-Patrocinio" />
                    </div>
                    <h2>{RandPatri[numeros[0]].subtitle}</h2>
                </div>
            </a>

            <a href={RandPatri[numeros[1]].url} target="_blank" className="link-Patrocinio">
                <div className="caixa-Patrocinio">
                    <div className="caixaimg-Patro">
                        <img src={RandPatri[numeros[1]].img} alt="" className="imgs-Patrocinio" />
                    </div>
                    <h2>{RandPatri[numeros[1]].subtitle}</h2>
                </div>
            </a>

            <a href={RandPatri[numeros[2]].url} target="_blank" className="link-Patrocinio">
                <div className="caixa-Patrocinio">
                    <div className="caixaimg-Patro">
                        <img src={RandPatri[numeros[2]].img} alt="" className="imgs-Patrocinio" />
                    </div>
                    <h2>{RandPatri[numeros[2]].subtitle}</h2>
                </div>
            </a>
        </aside>
    );
};
