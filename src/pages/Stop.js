import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { positions, instructions, instructionStart, positions2 } from "../utils/stopValues";

import stopSound from "../assets/audio/stop.mp3";

import '../styles/pages/stop.scss';


const stopSteps = [
    {
        step: 0,
        name: "Prueba",
        instructions: instructions,
        values: [...positions]
    },
    {
        step: 1,
        name: "Stop test",
        instructions: instructionStart,
        values: [...positions2]
    }
];

const MODAL_DEFAULT_DATA = {
    activated: false,
    setp: 0,
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
    values: []
};

const DEFAULT_GAME_DATA = {
    position: "",
    img: '',
    class: "",
    name: "",
    type: "",
    id: "",
    activated: false,
    timeStart: "",
    timeEnd: ""
};

let gameValues;
let intVal;
let results = {};
const responses = [];

export default function Stop() {

    const [modalBody, setModalBody] = useState(MODAL_DEFAULT_DATA);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
    const [step, setStep] = useState(DEFAULT_STEP);

    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const saveAllData = () => {
        const date = new Date();
        const stopTestData = {
            test: "Stop",
            data: results
        };
        let newData = [];
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const user = data.filter((item)=>item.id === id);
            if (user.length > 0) {
                const restData = data.filter((user)=>user.id !== id);
                const userData = user[0];
                const preTestExist = userData.preTest.filter((t)=>t.test === "Stop");
                if (preTestExist.length > 0) {
                    newData = [...restData, { ...userData, posTest:[...userData.posTest, stopTestData] }]
                } else {
                    newData = [...restData, { ...userData, preTest:[...userData.preTest, stopTestData] }]
                }
            } else {
                newData = [...data, { id, date: date.toLocaleDateString(), preTest: [stopTestData], posTest:[] }];
            }
        } else {
            newData = [{ id, preTest: [stopTestData], posTest: [], date: date.toLocaleDateString() }];
        }
        localStorage.setItem( "data", JSON.stringify(newData));
    };

    const playStopSound = () => {
        const audio = new Audio(stopSound);
        audio.play();
    }
    
    const nextStep = () => {
        if (step.step < stopSteps.length -1) {
            const index = step.step + 1;
            setStep(stopSteps[index]);
            setModalBody({activated: true ,step: 0, data: stopSteps[index].instructions[0]});
        } else {
            swal({
                title: "Felicidades, has completado la prueba",
                text: `Realisaste la prueba Stop, en su totalidad,
                da clic en el boton para regresar al menu`,
                icon: "success",
                button: "Regresar",
            }).then((value) => {
                saveAllData();
                navigate(`/user/${id}`);
            });
        }
    };

    const getAleatory = () => {
        const min = 0;
        const max = gameValues.length - 1;
        const x = Math.floor(Math.random()*(max-min+1)+min);
        const newData = gameValues[x];
        gameValues = [...gameValues.slice(0, x), ...gameValues.slice(x + 1, gameValues.length)];
        return newData;
    };

    const nextImage = () => {
        if (gameValues.length > 0) {
            setGameData({
                ...gameData,
                ...getAleatory(),
                timeStart: Date.now()
            });
        } else {
            if (step.step === 0) {
                results = {
                    ...results,
                    Practica: responses.filter((res)=>res.type === "test")
                };
            } if (step.step === 1) {
                results = {
                    ...results,
                    Ensayo: responses.filter((res)=>res.type === "prueba")
                };
            }
            setGameData(DEFAULT_GAME_DATA);
            nextStep();
        }
    };

    const clearImage = () => {
        setGameData({
            ...gameData,
            img: "",
            key: "None"
        });
    };

    const handleStart = () => {
        gameValues = [...step.values]
        setModalBody(MODAL_DEFAULT_DATA);
        const newData = getAleatory();
        setGameData({
            ...gameData,
            ...newData,
            activated: true,
            timeStart: Date.now()
        });
    };

    const saveResponse = (keyPress) => {
        const response = {
            title: step.name,
            id: gameData.id,
            key: gameData.key,
            type: gameData.type,
            signal: gameData.signal,
            response: gameData.key === keyPress ? true: false,
            keyPress,
            time: `${((Date.now() - gameData.timeStart) / 1000)}s`
        };
        const exist = responses.filter((res)=>res.id === gameData.id);
        if (exist.length === 0) {
            responses.push(response);
            return true;
        } else {
            false
        }
    };

    const handleKey = (event) => {
        const keyPress = String.fromCharCode(event.keyCode);
        if (gameData.activated && gameData.key !== "None") {
            if (saveResponse(keyPress)) {
                if (gameData.type === "test") {
                    if ((keyPress !== gameData.key) && !gameData.signal) {
                        const errorMsg = `Debes presionar la tecla correspondiente, en este caso es la tecla ${keyPress === "A" ? "L" : "A"}`; 
                        clearInterval(intVal);
                        swal({
                            title: "Error",
                            text: errorMsg,
                            icon: "error",
                            button: "ok",
                        }).then((value) => {
                            clearImage();
                        });
                    } else if ((keyPress === gameData.key) && !gameData.signal) {
                        clearInterval(intVal);
                        swal({
                            title: "Correcto !!",
                            text: "Buen trabajo",
                            icon: "success",
                            timer: 1200,
                            buttons: false
                        }).then((value) => {
                            clearImage();
                        });
                    } else if (gameData.signal) {
                        const errorMsg = "Cuando suena la senal de stop, no debes precionar ninguna tecla";
                        clearInterval(intVal);
                        swal({
                            title: "Error",
                            text: errorMsg,
                            icon: "error",
                            button: "ok",
                        }).then((value) => {
                            clearImage();
                        });
                    }
                } else {
                    if (!gameData.signal) {
                        clearInterval(intVal);
                        clearImage();
                    }
                }
            }
        } else if (modalBody.activated && modalBody.step === step.instructions.length) {
            if (keyPress === " ") {
                playStopSound();
            }
        }
    };

    // Efecto para mostrar las imagenes
    useEffect(() => {
        if (gameData.activated) {
             if (gameData.img !== "" && gameValues.length >= 0) {
                setTimeout(()=>{
                    if (gameData.signal) {
                        playStopSound();
                    }
                }, 250);
                 intVal = setTimeout(()=>{
                     const exist = responses.filter((res)=>res.id === gameData.id);
                     if (exist.length === 0) {
                         saveResponse(null);
                         if (gameData.type === "test" && !gameData.signal) {
                             clearInterval(intVal);
                             const errorMsg = `Ups, se te ha pasado el tiempo, procura ser mas rapido en tu respuesta`;
                             swal({
                                 title: "Error",
                                 text: errorMsg,
                                 icon: "error",
                                 button: "ok",
                             }).then((value) => {
                                 clearImage();
                             });
                         } else if (gameData.type === "test" && gameData.signal) {
                            swal({
                                title: "Correcto !!",
                                text: "Buen trabajo",
                                icon: "success",
                                timer: 1200,
                                buttons: false
                            }).then((value) => {
                                clearImage();
                            });
                         } else {
                             clearImage();    
                         }
                     } else {
                        
                        clearImage();
                     }
                 }, 2000);
             } else if (gameData.img === "") {
                 intVal = setTimeout(nextImage, 500);
             }
        } 
     }, [gameData]);

    // Efecto para mostrar las instrucciones automaticamente
    useEffect(() => {
        if (modalBody.activated) {
            if (modalBody.step < step.instructions.length) {
                setTimeout(()=>{
                    setModalBody({
                        ...modalBody,
                        step: modalBody.step + 1,
                        data: step.instructions[modalBody.step]
                    });
                }, 4000);
            }
        }
    }, [modalBody]);

    // use Effect para resetear el evento que escucha la tecla a presionar
    useEffect(() => {
        document.removeEventListener('keydown', handleKey);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('keydown', handleKey);
        }
    }, [gameData, modalBody]);

    // Inicia con las instrucciones de la figura de corazon
    useEffect(() => {
        nextStep();
    }, []);

    return (
        <div className="simon">
            {
                modalBody.activated ? (
                    <div className="modal">
                        <div className="modal-container">
                            <div className="modal-container-text">
                                <h1>{modalBody.data.title}</h1>
                                <img src={modalBody.data.img} />
                                <p>{modalBody.data.body}</p>
                                {
                                    (modalBody.step === step.instructions.length) && (
                                        <button onClick={handleStart}>Iniciar</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="stop-container">
                        <div className="image-game">
                            <img src={gameData.img} />
                        </div>
                    </div>
                )
            }  
        </div>
    );

}
