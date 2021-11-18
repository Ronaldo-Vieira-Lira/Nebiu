import React, { useState } from "react";
import "../../assets/css/Post.css";

import Imgup from "../../assets/images/icons/like.svg";
import LikeDark from "../../assets/images/icons/likeDark.svg";
import Imgdown from "../../assets/images/icons/deslike.svg";
import DeslikeDark from "../../assets/images/icons/deslikeDark.svg";
import Save from "../../assets/images/icons/save.svg";
import SaveDark from "../../assets/images/icons/saveDark.svg";

export default function Feed({ imgPost, nameUser, desction, imgUser }) {

    const [like, setLike] = useState(Math.floor(Math.random() * (100 - 2 + 1) + 2))
    const [deslike, setDeslike] = useState(Math.floor(Math.random() * (50 - 2 + 1) + 2))

    const [salva, setSalva] = useState(false)

    const [imgLike, setImglike] = useState(false)
    const [imgDeslike, setImgdesl] = useState(false)
    
    return (

        <div id="container-Post">

            <div id="caixa-Post">

                <div id="dados-Post">
                    <div id="autor-Post">
                        <img src={imgUser} alt="img" id="img-User-Post" />
                        <h2>{nameUser}</h2>
                    </div>
                </div>

                <div id="conteudo-Post">
                    <p>{desction}</p>
                    <img src={imgPost} alt="img" id="img-Post" />
                </div>
                <div id="area-TextBtn">
                    {like} likes e {deslike} dislikes

                </div>
                <div id="area-Opniao">
                    <div id="area-LikeDeslike">
                        <button type="button" className="btnOpniao" onClick={() => {
                            if (imgLike === false) {

                                setImglike(!imgLike)

                                setLike(like + 1)
                            } else if (imgLike === true) { /* Indo para true */

                                setImglike(!imgLike)

                                setImgdesl(false)

                                setLike(like - 1)
                            }
                            if (imgDeslike === true) { /* Indo para false */

                                setImgdesl(!imgDeslike)

                                setDeslike(deslike - 1)
                            }

                        }}>
                            {
                                imgLike ? <img src={LikeDark} alt="img" /> : <img src={Imgup} alt="img" />
                            }
                        </button>

                        <button type="button" className="btnOpniao" onClick={() => {
                            
                            if (imgDeslike === false) {

                                setImgdesl(!imgDeslike)

                                setDeslike(deslike + 1)

                            }
                            if (imgDeslike === true) {

                                setImgdesl(!imgDeslike)

                                setImglike(false)

                                setDeslike(deslike - 1)
                            }
                            if (imgLike === true) {

                                setImglike(!imgLike)

                                setLike(like - 1)
                            }
                        }}>
                            {
                                imgDeslike ? <img src={DeslikeDark} alt="img" /> : <img src={Imgdown} alt="img" />
                            }
                        </button>
                    </div>
                    <button type="button" className="btnOpniao" onClick={(e) => {
                        e.preventDefault()
                        setSalva(!salva)}
                    }>
                        {
                            salva ? <img src={SaveDark} alt="img" /> : <img src={Save} alt="img" />
                        }
                    </button>

                </div>

            </div>

        </div>
    );
};