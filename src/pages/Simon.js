import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { positionsHearts, positionsFlowers, instructionsFlowers, instructionsHearts } from "../utils/simonValues";

import '../styles/pages/simon.scss';

import cross from "../assets/images/cross.png";
import heart from "../assets/images/heart.png";
import flower from "../assets/images/flower.png";

const MODAL_DEFAULT_DATA = {
    activated: true,
    instructions: "heart"
};

const DEFAULT_GAME_DATA = {
    start: false,
    positions: {},
    type: "",
    img: "",
    class: ""
};

export default function Simon () {
    
    const [modal, setModal] = useState(MODAL_DEFAULT_DATA);
    const [modalBody, setModalBody] = useState(null);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
    
    const params = useParams();
    const { id } = params;

    const heartsGame = () => {
        // image-game--left
    };

    const handleStartHeart = () => {
        setModalBody(null);
        setModal({
            ...modal,
            activated: false
        });
        setGameData({
            start: true,
            positions: positionsHearts[0],
            type: "test",
            img: heart,
            class: `image-game--${positionsHearts[0].position}`
        });
    };

    const handleKey = (event) => {
        if (!modal) {
            // const data = {

            // };
            console.log(event.keyCode);
        }
    };

    const startInstructionsHearts = () => {
        setModalBody({ step: 1, data: instructionsHearts[0] });
    };

    const startInstructionsFlowers = () => {
        setModalBody({ step: 1, data: instructionsFlowers[0] });
    };

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

    useEffect(() => {
      if (gameData.start && gameData.positions?.index < positionsHearts.length - 1) {
        setTimeout(()=>{
            const newValue = positionsHearts[gameData.positions.index + 1];
            setGameData({
                ...gameData,
                positions: newValue,
                index: gameData.positions.index + 1,
                class: `image-game--${newValue.position}`
            });
        }, 2000);
      }
    }, [gameData]);
    
    document.addEventListener('keydown', handleKey);

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
                        { 
                            gameData.start && (
                                <div className={`image-game ${gameData.class}`}>
                                    <img src={gameData.img} />
                                </div>)
                        }
                        <div className="image-center">
                            <img src={cross} />
                        </div>
                    </div>
                )
            }
        </div>
    )
};
