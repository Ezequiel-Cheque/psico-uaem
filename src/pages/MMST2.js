import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { instructions, mmstPrueba, mmstPrueba2, instructionStart, images1, images2 } from "../utils/mmst2Values";

import audio_uno from "../assets/audio/uno.mp3";
import audio_dos from "../assets/audio/dos.mp3";
import audio_tres from "../assets/audio/tres.mp3";
import audio_cuatro from "../assets/audio/cuatro.mp3";
import audio_cinco from "../assets/audio/cinco.mp3";
import audio_seis from "../assets/audio/seis.mp3";
import audio_siete from "../assets/audio/siete.mp3";
import audio_ocho from "../assets/audio/ocho.mp3";
import audio_nueve from "../assets/audio/nueve.mp3";
import audio_diez from "../assets/audio/diez.mp3";
import audio_once from "../assets/audio/once.mp3";
import audio_doce from "../assets/audio/doce.mp3";
import audio_trece from "../assets/audio/trece.mp3";
import audio_catorce from "../assets/audio/catorce.mp3";
import audio_quince from "../assets/audio/quince.mp3";
import audio_dieciseis from "../assets/audio/dieciseis.mp3";
import audio_diecisiete from "../assets/audio/diecisiete.mp3";
import audio_dieciocho from "../assets/audio/dieciocho.mp3";

import  coin from "../assets/images/coin.png";

import '../styles/pages/mmst.scss';

import errorSound from "../assets/audio/stop.mp3";
import whiteSound from "../assets/audio/sonidoBlanco.mp3";

const mmstSteps = [
    {
        step: 2,
        name: "Test MMST2",
        instructions: instructionStart,
        values: [...mmstPrueba2],
        images: images1
    }
];

const MODAL_DEFAULT_DATA = {
    activated: false,
    step: 0,
    data: {
        title: "",
        body: "",
        img: ""
    }
};

const DEFAULT_STEP = {
    step: -1,
    name: "",
    instructions: [],
    values: [],
    images: []
};

const DEFAULT_GAME_DATA = {
    id: 0,
    number:  null,
    type: "",
    time: 0,
    oldNumber: null,
    activated: false,
    timeStart: 0,
    index: 0
};

const DEFAULT_IMAGES_DATA = {
    img: "",
    time: 0,
    id: null
};

let intVal;
let results = {};
let responses = [];

const audio = [
    audio_uno,
    audio_dos,
    audio_tres,
    audio_cuatro,
    audio_cinco,
    audio_seis,
    audio_siete,
    audio_ocho,
    audio_nueve,
    audio_diez,
    audio_once,
    audio_doce,
    audio_trece,
    audio_catorce,
    audio_quince,
    audio_dieciseis,
    audio_diecisiete,
    audio_dieciocho
];

let whiteVolume = 0.78;
const whiteS = new Audio(whiteSound);
whiteS.volume = whiteVolume;

export default function MMST() {

    const [modalBody, setModalBody] = useState(MODAL_DEFAULT_DATA);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
    const [imagesData, setImagesData] = useState(DEFAULT_IMAGES_DATA);
    const [step, setStep] = useState(DEFAULT_STEP);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;
    
    const returnHome = () => {
        navigate(`/user/${id}`);
    };

    const nextStep = () => {
        const newStep = step.step + 1;
        if (newStep < mmstSteps.length) {
            const newDataStep = mmstSteps[newStep];
            setStep(newDataStep);
        } else {
            whiteS.pause();
            swal({
                title: "Termino la prueba",
                text: `preciona el boton para regresar al menu`,
                icon: "success",
                button: "Regresar",
            }).then((value) => {
                setStep(DEFAULT_STEP);
                setGameData(DEFAULT_GAME_DATA);
                setModalBody(MODAL_DEFAULT_DATA);
                results = {};
                responses = [];
                navigate(`/user/${id}`);
            });
        }
    };

    const playSound = (number) => {
        const audioNumber = audio[number - 1];
        const audioPlay = new Audio(audioNumber);
        audioPlay.play();
    }

    const handleStart = () => {
        setModalBody(MODAL_DEFAULT_DATA);
        setScore(0);
        setGameData({
            ...gameData,
            ...step.values[0],
            activated: true,
            timeStart: Date.now()
        });
        if (step.step === 2) {
            setImagesData(step.images[0]);
            // whiteS.play();
            setCount(1)
        }
    };

    const handleNext = () => {
        if (modalBody.step < step.instructions.length -1) {
            setModalBody({
                ...modalBody,
                step: modalBody.step + 1,
                data: step.instructions[modalBody.step + 1]
            });
        } else if (modalBody.step === step.instructions.length -1) {
            handleStart();
        }
    };

    const clearNumber = () => {
        setGameData({
            ...gameData,
            number: ""
        });
    };

    const nextNumber = () => {
        if (gameData.index < step.values.length -1) {
            const newData = step.values[gameData.index + 1];
            setGameData({
                ...gameData,
                ...newData,
                oldNumber: step.values[gameData.index].number,
                timeStart: Date.now()
            });
        } else {
            if (step.step === 1) {
                results = {
                    ...results,
                    Practica: responses.filter((res)=>res.type === "test")
                };
            } if (step.step === 2) {
                results = {
                    ...results,
                    Ensayo: responses.filter((res)=>res.type === "prueba")
                };
            }
            setGameData(DEFAULT_GAME_DATA);
            nextStep();
        }
    };
    
    // // Efecto para mostrar los numeros
    useEffect(() => {
        if (gameData.activated) {
            if (gameData.number !== "") {
                playSound(gameData.number);
                intVal = setTimeout(() => {
                    clearNumber();
                }, gameData.time);
            } else {
                intVal = setTimeout(nextNumber, 500);
            }
        } 
     }, [gameData]);

     // // Efecto para mostrar las imagenes random
    useEffect(() => {
        if (imagesData.img !== "" && imagesData.time > 0) {
            setTimeout(() => {
                const nextIndex = imagesData.id + 1;
                if ( nextIndex < step.images.length) {
                    const newImageData = step.images[nextIndex];
                    setImagesData(newImageData);
                } else {
                    setImagesData(DEFAULT_IMAGES_DATA);
                    if (step.step === 0) {
                        nextStep();   
                    }
                }
            }, imagesData.time);
        }
    }, [imagesData]);

    useEffect(() => {
        if (step.step === 0) {
            setImagesData(step.images[0]);
        } else if (step.step === 1 || step.step === 2) {
            // setModalBody({activated: true ,step: 0, data: step.instructions[0]});
            handleStart();
        }
    }, [step])
    

    // Inicia con las instrucciones
    useEffect(() => {
        nextStep();
    }, []);

    return (
        <div className="mmst">
            {
                modalBody.activated ? (
                    <div className="modal">
                        <div className="modal-container">
                            <div className="modal-container-text">
                                <h1>{modalBody.data.title}</h1>
                                {/* <img style={{width: modalBody.data.size}} src={modalBody.data.img} /> */}
                                <p>{modalBody.data.body}</p>
                                <button onClick={handleNext}>Continuar</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mmst-container">
                        {
                            gameData.activated ? (
                                <div className= "num-section">
                                    <div className="num-section--value">{gameData.number}</div>
                                    <div className="num-section--btn-return">
                                        <button onClick={returnHome}>Regresar</button>
                                    </div>
                                    {/* <div className="num-section--first">
                                        <div className="num-section-number" onClick={handleClick}>12</div>
                                        <div className="num-section-number" onClick={handleClick}>13</div>
                                        <div className="num-section-number" onClick={handleClick}>14</div>
                                        <div className="num-section-number" onClick={handleClick}>15</div>
                                        <div className="num-section-number" onClick={handleClick}>16</div>
                                        <div className="num-section-number" onClick={handleClick}>17</div>
                                    </div>
                                    <div className="num-section--second">
                                        <div className="num-section-number" onClick={handleClick}>11</div>
                                        <div className="num-section-number" onClick={handleClick}>18</div>
                                    </div>
                                    <div className="num-section--trhird">
                                        <div className="num-section-number" onClick={handleClick}>10</div>
                                        <div className="num-section-number" onClick={handleClick}>1</div>
                                    </div>
                                    <div className="num-section--fourth">
                                        <div className="num-section-number" onClick={handleClick}>9</div>
                                        <div className="num-section-number" onClick={handleClick}>2</div>
                                    </div>
                                    <div className="num-section--end">
                                        <div className="num-section-number" onClick={handleClick}>8</div>
                                        <div className="num-section-number" onClick={handleClick}>7</div>
                                        <div className="num-section-number" onClick={handleClick}>6</div>
                                        <div className="num-section-number" onClick={handleClick}>5</div>
                                        <div className="num-section-number" onClick={handleClick}>4</div>
                                        <div className="num-section-number" onClick={handleClick}>3</div>
                                    </div> */}
                                </div>
                            ) : (
                                <div className= "num-section"></div >
                            )
                        }
                        <div className="img-section">
                            <img src={imagesData.img} />
                        </div>
                    </div>
                )
            }  
        </div>
    );

}
