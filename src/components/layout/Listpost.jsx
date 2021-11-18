import React, { useState, useEffect } from "react";
import api from "../../assets/data/Api";
import Post from "../layout/Post"

export default function Listpost() {

    const [date, setDate] = useState([]);
    useEffect( () => {
        api.get("").then( (response) =>{
            setDate(response.data.results);
        });
    }, []);

    var postList = []
    var rand = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    for (let x = 0; x <= rand; x++) {
        postList.push({
            id: x, 
            Userimg: date[x]?.picture.medium, 
            Usernome: `${date[x]?.name.first} ${date[x]?.name.last}`, 
            descricao: "Meu novo post", 
            Postimg: `https://source.unsplash.com/user/erondu/1200x${Math.floor(Math.random() * (800 - 400 + 1) + 400)}`
    })};
    

    return (
        <>
            { postList.map( (poster) => {
                return (

                    <Post 
                        key={poster.id}
                        imgUser={poster.Userimg}
                        nameUser={poster.Usernome}
                        desction={poster.descricao}
                        imgPost={poster.Postimg}
                    /> 
                    
                )
            })}
        </>
    );
};