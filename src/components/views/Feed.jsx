import React from "react";
import DadosUser from "../../assets/data/DadosUser"
import "../../assets/css/Feed.css";

/* Components */
import Header from "../layout/Header";
import Listpost from "../layout/Listpost";
import NavLateral from "../layout/NavLateral";
import Patrocinio from "../layout/Patrocinio";

export default function Feed() {

    return (
        <>
            <Header status={true}/>

            <div id="container-Feed">
                <div id="area-Lateral">
                    <NavLateral 
                        userImg={DadosUser.img}
                        userName={DadosUser.nome}
                    />
                </div> 

                <div id="area-Post">
                    <Listpost />
                </div>
                <div id="area-Patrocinio">
                    <Patrocinio />
                </div>
                
            </div>
        </>
    );
};