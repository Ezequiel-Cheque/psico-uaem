import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { positionsHearts, positionsFlowers, instructionsFlowers, instructionsHearts } from "../utils/simonValues";

import '../styles/pages/simon.scss';

import cross from "../assets/images/cross.png";

const MODAL_DEFAULT_DATA = {
    activated: true,
    instructions: "heart"
};

const DEFAULT_GAME_DATA = {
    index: 1,
    position: "",
    img: '',
    class: "",
    key: ""
};

export default function Simon () {
    
    const [modal, setModal] = useState(MODAL_DEFAULT_DATA);
    const [modalBody, setModalBody] = useState(null);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
    
    const params = useParams();
    const { id } = params;

    let keyPress = "";
    let intVal;

    const heartsGame = () => {
        const container = document.getElementById("showImage");
        let cont = 0;

        intVal = setInterval(()=>{
            if (cont < positionsHearts.length) {
                const data = positionsHearts[cont];
                
                container.classList.add(data.class);
                container.innerHTML=`<img src="${data.img}" />`;
                console.log(data);
                keyPress = data.key;
                cont + 1;
                setTimeout(()=>{
                    container.classList.remove(data.class);
                    container.innerHTML=``;
                    keyPress = ""
                }, 500);
            } else {
                clearInterval(intVal);
            }
        }, 3000);
    };

    const handleStartHeart = () => {
        setModalBody(null);
        setModal({
            ...modal,
            activated: false
        });
    };

    const handleKey = (event) => {
        console.log(String.fromCharCode(event.keyCode));
        console.log('key', keyPress);
    };

    const startInstructionsHearts = () => {
        setModalBody({ step: 1, data: instructionsHearts[0] });
    };

    const startInstructionsFlowers = () => {
        setModalBody({ step: 1, data: instructionsFlowers[0] });
    };

    useEffect(() => {
        if (!modal.activated && modal.instructions === "heart") {
            heartsGame();
        }
    }, [modal]);

    useEffect(() => {
        if (modal.activated && modalBody) {
            if (modal.instructions === "heart" && modalBody.step < 5) {
                setTimeout(()=>{
                    setModalBody({ step: modalBody.step + 1, data: instructionsHearts[modalBody.step] });
                }, 4000);
            } else if (modal.instructions === "flowers" && modalBody.step < 5) {
                setTimeout(()=>{
                    setModalBody({ step: modalBody.step + 1, data: instructionsFlowers[modalBody.step] });
                }, 4000);
            }
        }
    }, [modalBody, modal]);
    
    useEffect(()=>{
        document.removeEventListener('keydown', handleKey);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('keydown', handleKey);
        }
    }, [modal, gameData, modalBody]);

    useEffect(() => {
        startInstructionsHearts();
    }, []);

    return (
        <div className="simon">
            {
                modal.activated ? (
                    <div className="modal">
                        <div className="modal-container">
                            <div className="modal-container-text">
                                <h1>{modalBody?.data.title}</h1>
                                <img src={modalBody?.data.img} />
                                <p>{modalBody?.data.body}</p>
                                {
                                    (modalBody?.step === 5 && modal.instructions === "heart" ) && (
                                        <button onClick={handleStartHeart}>Iniciar</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="simon-container">
                        <div id="showImage" className="image-game"></div>
                        <div className="image-center">
                            <img src={cross} />
                        </div>
                    </div>
                )
            }
        </div>
    )
};
