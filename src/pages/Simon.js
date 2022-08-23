import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { positionsHearts, positionsFlowers, instructionsFlowers, instructionsHearts } from "../utils/simonValues";

import '../styles/pages/simon.scss';

import cross from "../assets/images/cross.png";

const MODAL_DEFAULT_DATA = {
    activated: true,
    instructions: "heart"
};

const DEFAULT_GAME_DATA = {
    position: "",
    img: '',
    class: "",
    name: "",
    type: "",
    activated: false
};

let heartValues = [...positionsHearts];
let intVal;

export default function Simon () {
    
    const [modal, setModal] = useState(MODAL_DEFAULT_DATA);
    const [modalBody, setModalBody] = useState(null);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);    
    
    const params = useParams();
    const { id } = params;

    const getAleatory = () => {
        const min = 0;
        const max = heartValues.length - 1;
        const x = Math.floor(Math.random()*(max-min+1)+min);
        const newData = heartValues[x];
        heartValues = [...heartValues.slice(0, x), ...heartValues.slice(x + 1, heartValues.length)];
        return newData;
    };

    const nextImage = () => {
        if (gameData.name === "heart") {
            if (heartValues.length > 0) {
                setGameData({
                    ...gameData,
                    ...getAleatory()
                });
            } else {
                setGameData(DEFAULT_GAME_DATA);
            }
        }
    };

    const clearImage = () => {
        setGameData({
            ...gameData,
            img: "",
            key: "None"
        });
    };

    const handleStartHeart = () => {
        setModalBody(null);
        setModal({
            ...modal,
            activated: false
        });
        const newData = getAleatory();
        setGameData({
            ...gameData,
            ...newData,
            activated: true
        });
    };

    const handleKey = (event) => {
        const keyPress = String.fromCharCode(event.keyCode);
        if (gameData.name === "heart" && gameData.key !== "None" && gameData.activated) {
            if (gameData.type === "test" && (keyPress !== gameData.key)) {
                const errorMsg = `Debes presionar la tecla correspondiente a su lado, en este caso la tecla ${keyPress === "A" ? "L" : "A"}`; 
                clearInterval(intVal);
                swal({
                    title: "Error",
                    text: errorMsg,
                    icon: "error",
                    button: "ok",
                }).then((value) => {
                    nextImage();
                });
                
            }
        }
    };

    const startInstructionsHearts = () => {
        setModalBody({ step: 1, data: instructionsHearts[0] });
    };

    const startInstructionsFlowers = () => {
        setModalBody({ step: 1, data: instructionsFlowers[0] });
    };

    // Efecto para mostrar las imagenes
    useEffect(() => {
       if (gameData.activated) {
            if (gameData.name === "heart" && gameData.img !== "" && heartValues.length >= 0) {
                intVal = setTimeout(clearImage, 3000);
            } else if (gameData.name === "heart" && gameData.img === "") {
                intVal = setTimeout(nextImage, 800);
            }
       } 
    }, [gameData]);
    
    // Efecto para mostrar las instrucciones automaticamente
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
    
    // use Effect para resetear el evento que escucha la tecla a presionar
    useEffect(()=>{
        document.removeEventListener('keydown', handleKey);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('keydown', handleKey);
        }
    }, [modal, gameData, modalBody]);

    // Inicia con las instrucciones de la figura de corazon
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
                        <div id="showImage" className={`image-game ${gameData.class}`}>
                            <img src={gameData.img} />
                        </div>
                        <div className="image-center">
                            <img src={cross} />
                        </div>
                    </div>
                )
            }
        </div>
    )
};
