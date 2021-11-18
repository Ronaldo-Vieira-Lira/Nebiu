import React from "react";
import "../../assets/css/Fotos.css";

import Geliel from "../../assets/images/imgDev/geliel.jpg";
import Manoel from "../../assets/images/imgDev/manoel.jpg";
import Hillary from "../../assets/images/imgDev/hillary.jpg";
import Ronaldo from "../../assets/images/imgDev/ronaldo.jpg";

export default function Fotos() {
    return (
        <div id="container-Fotos">
            <legend>Fotos</legend>
            <div id="caixa-Fotos">
                <div className="espacador">

                    <div className="fotos">
                        <a href="https://github.com/Geliel1" target="_blank" rel="noreferrer">
                            <img src={Geliel} alt="img" />
                        </a>
                    </div>

                    <div className="fotos">
                        <a href="https://github.com/ManoelNasciment0" target="_blank">
                            <img src={Manoel} alt="img"/>
                        </a>
                    </div>
                    <div className="fotos">
                        <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="img"/>
                    </div>

                    <div className="fotos">
                        <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="img"/>
                    </div>

                </div>

                <div className="espacador">

                    <div className="fotos">
                        <a href="https://github.com/HillaryNasc" target="_blank">
                            <img src={Hillary} alt="img"/>
                        </a>
                    </div>

                    <div className="fotos">
                        <a href="https://github.com/Ronaldo-Vieira-Lira" target="_blank">
                            <img src={Ronaldo} alt="img"/>
                        </a>
                    </div>
                    <div className="fotos">
                        <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="img"/>
                    </div>
                    <div className="fotos">
                        <img src="https://randomuser.me/api/portraits/men/53.jpg" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};