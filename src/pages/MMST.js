import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { instructions, mmstPrueba, mmstPrueba2, instructionStart, images1, images2 } from "../utils/mmstValues";

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

const mmstSteps = [
    {
        step: 0,
        name: "Imagenes",
        instructions: [],
        values: [],
        images: images1
    },
    {
        step: 1,
        name: "Prueba",
        instructions: instructions,
        values: [...mmstPrueba],
        images: []
    },
    {
        step: 2,
        name: "Test MMST",
        instructions: instructionStart,
        values: [...mmstPrueba2],
        images: images2
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

export default function MMST() {

    const [modalBody, setModalBody] = useState(MODAL_DEFAULT_DATA);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
    const [imagesData, setImagesData] = useState(DEFAULT_IMAGES_DATA);
    const [step, setStep] = useState(DEFAULT_STEP);
    const [score, setScore] = useState(0);

    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const saveAllData = () => {
        const date = new Date();
        const mmstTestData = {
            test: "MMST",
            data: results
        };
        let newData = [];
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const user = data.filter((item)=>item.id === id);
            if (user.length > 0) {
                const restData = data.filter((user)=>user.id !== id);
                const userData = user[0];
                const preTestExist = userData.preTest.filter((t)=>t.test === "MMST");
                if (preTestExist.length > 0) {
                    newData = [...restData, { ...userData, posTest:[...userData.posTest, mmstTestData] }]
                } else {
                    newData = [...restData, { ...userData, preTest:[...userData.preTest, mmstTestData] }]
                }
            } else {
                newData = [...data, { id, date: date.toLocaleDateString(), preTest: [mmstTestData], posTest:[] }];    
            }
        } else {
            newData = [{ id, preTest: [mmstTestData], posTest: [], date: date.toLocaleDateString() }];
        }
        localStorage.setItem( "data", JSON.stringify(newData));
    };

    const nextStep = () => {
        const newStep = step.step + 1;
        if (newStep < mmstSteps.length) {
            const newDataStep = mmstSteps[newStep];
            setStep(newDataStep);
        } else {
            swal({
                title: "Felicidades, has completado la prueba",
                text: `Realisaste la prueba Stop, en su totalidad,
                da clic en el boton para regresar al menu`,
                icon: "success",
                button: "Regresar",
            }).then((value) => {
                saveAllData();
                setStep(DEFAULT_STEP);
                setGameData(DEFAULT_GAME_DATA);
                setModalBody(MODAL_DEFAULT_DATA);
                results = {};
                responses = [];
                navigate(`/user/${id}`);
            });
        }
    };

    const playStopSound = () => {
        const audio = new Audio(errorSound);
        audio.play();
    }

    const saveResponse = (keyPress) => {
        if (gameData.number !== "") {
            const response = {
                title: step.name,
                id: gameData.id,
                type: gameData.type,
                level: gameData.level,
                response: (gameData.oldNumber + gameData.number) === keyPress ? true: false,
                keyPress,
                correct: gameData.oldNumber + gameData.number,
                number: gameData.number,
                numberBefore: gameData.oldNumber,
                time: `${((Date.now() - gameData.timeStart) / 1000)}s`
            };
            if (response.response) {
                setScore(score + 100);
            } else if (!response.response && gameData.index !== 0) {
                playStopSound();
                setScore(score - 100);
            }
            const exist = responses.filter((res)=>res.id === gameData.id);
            if (exist.length === 0) {
                responses.push(response);
                return response;
            } else {
                false
            }
        }
    };

    const playSound = (number) => {
        const audioNumber = audio[number - 1];
        // console.log(audioNumber);
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

    const handleClick = (event) => {
        const numberSelected = parseInt(event.target.innerHTML, 10);;
        const response = saveResponse(numberSelected);
        if (gameData.type === "test" && gameData.index === 0) {
            clearInterval(intVal);
            swal({
                title: "Error",
                text: "Error, debes esperar el segundo numero, para escoger una respuesta",
                icon: "error",
                button: "ok",
            }).then((value) => {
                clearNumber();        
            });
        } else if (gameData.type === "test" && response.response === false) {
            clearInterval(intVal);
            swal({
                title: "Error",
                text: `Error, respuesta incorrecta, la respuesta correcta es: ${response.correct}`,
                icon: "error",
                button: "ok",
            }).then((value) => {
                clearNumber();        
            });
        } else if (gameData.type === "test" && response.response === true) {
            clearInterval(intVal);
            swal({
                title: "Correcto",
                text: "Bien hecho, la suma es correcta",
                icon: "success",
                button: "continuar",
            }).then((value) => {
                clearNumber();        
            });
        } else if (gameData.type === "prueba") {
            clearInterval(intVal);
            clearNumber();
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
                    const exist = responses.filter((res)=>res.id === gameData.id);
                    if (exist.length === 0) {
                        const save = saveResponse(null);
                        if (gameData.type === "test" && gameData.index !==0) {
                            swal({
                                title: "Error",
                                text: "Error, debes presionar una respuesta, recuerda que debes sumar el numero en pantalla, con el numero mostrado anteriormente",
                                icon: "error",
                                button: "ok",
                            }).then((value) => {
                                clearNumber();
                            });
                        } else {
                            clearNumber();
                        }
                    } else {
                        clearNumber();
                    }
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
            setModalBody({activated: true ,step: 0, data: step.instructions[0]});
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
                                <img style={{width: modalBody.data.size}} src={modalBody.data.img} />
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
                                    <div className="num-section--score">
                                        <div><img src={coin}/></div>
                                        <input name="score" type="text" value={score} readOnly/>
                                    </div>
                                    <div className="num-section--first">
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
                                    </div>
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
