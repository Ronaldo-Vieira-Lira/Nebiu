import React from "react";
import Header from "../layout/Header";
import PerfilUser from "../layout/PerfilUser";
export default function Perfil() {
    return (
        <>
            <Header perfil={null} status={false}/>
            <PerfilUser />
        </>
    )
}