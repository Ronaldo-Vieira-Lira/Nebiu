import React, {useState, useEffect} from "react";
import api from "../../assets/data/Api";
import Acoes from "../../assets/data/AcoesNotificacoes";
import CardNotificacao from "./CardNotificacao";

export default function ListCardNoti() {

    const [dadosApi, setDadosApi] = useState([]);

    useEffect(() => {
        api.get("").then((response) => {
            setDadosApi(response.data.results);
        })
    }, []);

    var num = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    var listCard = []

    for(let x = 0; x <= num; x++){
        var descricao = Math.floor(Math.random() * (3 - 0 + 1) + 0)
        listCard.push({
            nome: `${dadosApi[x]?.name.first} ${dadosApi[x]?.name.last}`,
            imagem: dadosApi[x]?.picture.thumbnail,
            fez: Acoes[descricao]
    })};
    console.log(listCard)
    return (
        listCard.map( (dados) => {
            return (
                <CardNotificacao 
                Img={dados.imagem}
                Name={dados.nome}
                Feito={dados.fez}
                />
            )
        })
    );
};