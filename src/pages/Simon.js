import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import {
    instructionStart,
    instructionsHearts,
    positionsHearts,
    positionsHearts2,
    instructionsFlowers,
    positionsFlowers,
    positionsFlowers2,
    instructionsMixto,
    positionsMixto,
    positionsMixto2
} from "../utils/simonValues";

import '../styles/pages/simon.scss';

import cross from "../assets/images/cross.png";

const simonSteps = [
    {
        step: 0,
        name: "Prueba congruentes",
        instructions: instructionsHearts,
        values: [...positionsHearts]
    },
    {
        step: 1,
        name: "Nivel 1, congruentes",
        instructions: instructionStart,
        values: [...positionsHearts2]
    },
    {   
        step: 2,
        name: "Prueba incongruentes",
        instructions: instructionsFlowers,
        values: [...positionsFlowers]
    },
    {   
        step: 3,
        name: "Nivel 2, incongruentes",
        instructions: instructionStart,
        values: [...positionsFlowers2]
    },
    {   
        step: 4,
        name: "Prueba, mixto",
        instructions: instructionsMixto,
        values: [...positionsMixto]
    },
    {   
        step: 5,
        name: "Nivel 3, mixto",
        instructions: instructionStart,
        values: [...positionsMixto2]
    }
];

const DEFAULT_STEP = {
    step: -1,
    name: "",
    instructions: [],
    values: []
};

const MODAL_DEFAULT_DATA = {
    activated: false,
    setp: 0,
    data: {
        title: "",
        body: "",
        img: ""
    }
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
let responses = [];

export default function Simon () {
    const [modalBody, setModalBody] = useState(MODAL_DEFAULT_DATA);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
    const [step, setStep] = useState(DEFAULT_STEP);
    const navigate = useNavigate();

    const params = useParams();
    const { id } = params;

    const saveAllData = () => {
        const date = new Date();
        const simonTestData = {
            test: "Simon",
            data: results
        };
        let newData = [];
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            const user = data.filter((item)=>item.id === id);
            if (user.length > 0) {
                const restData = data.filter((user)=>user.id !== id);
                const userData = user[0];
                const preTestExist = userData.preTest.filter((t)=>t.test === "Simon");
                if (preTestExist.length > 0) {
                    newData = [...restData, { ...userData, posTest:[...userData.posTest, simonTestData] }]
                } else {
                    newData = [...restData, { ...userData, preTest:[...userData.preTest, simonTestData] }]
                }
            } else {
                newData = [...data, { id, date: date.toLocaleDateString(), preTest: [simonTestData], posTest:[] }];    
            }
        } else {
            newData = [{ id, preTest: [simonTestData], posTest: [], date: date.toLocaleDateString() }];
        }
        localStorage.setItem( "data", JSON.stringify(newData));
    };

    const nextStep = () => {
        if (step.step < simonSteps.length -1) {
            const index = step.step + 1;
            setStep(simonSteps[index]);
            setModalBody({activated: true ,step: 0, data: simonSteps[index].instructions[0]});
        } else {
            swal({
                title: "Felicidades, has completado la prueba",
                text: `Realisaste la prueba Simon, en su totalidad,
                da clic en el boton para regresar al menu`,
                icon: "success",
                button: "Regresar",
            }).then((value) => {
                saveAllData();
                setStep(DEFAULT_STEP);
                setGameData(DEFAULT_GAME_DATA);
                setModalBody(MODAL_DEFAULT_DATA);
                gameValues=[];
                results = {};
                responses = [];
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
                    practicaCongruentes: responses.filter((res)=> {
                        return (res.type === "test" && res.name === "heart");
                    })
                };
            } else if (step.step === 1) {
                results = {
                    ...results,
                    congruentes: responses.filter((res)=>res.type === "congruente")
                };
            } else if (step.step === 2) {
                results = {
                    ...results,
                    practicaIncongruentes: responses.filter((res)=>{
                        return (res.type === "test" && res.name === "flower");
                    })
                };
            } else if (step.step === 3) {
                results = {
                    ...results,
                    incongruentes: responses.filter((res)=>res.type === "incongruente")
                };
            } else if (step.step === 4) {
                results = {
                    ...results,
                    practicaMixtos: responses.filter((res)=>{
                        return (res.type === "test" && res.name === "mixto");
                    })
                };
            } else if (step.step === 5) {
                results = {
                    ...results,
                    mixtos: responses.filter((res)=>res.type === "mixto")
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
            name: gameData.name,
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
                    if ((keyPress !== gameData.key)) {
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
                    } else if ((keyPress === gameData.key)) {
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
                    }
                } else {
                    clearInterval(intVal);
                    clearImage();
                }
            }
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

    // Efecto para mostrar las imagenes
    useEffect(() => {
       if (gameData.activated) {
            if (gameData.img !== "" && gameValues.length >= 0) {
                intVal = setTimeout(()=>{
                    const exist = responses.filter((res)=>res.id === gameData.id);
                    if (exist.length === 0) {
                        saveResponse(null);    
                        if (gameData.type === "test") {
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
                        } else {
                            clearImage();    
                        }
                    } else {
                        clearImage();
                    }
                }, gameData.duration);
            } else if (gameData.img === "") {
                intVal = setTimeout(nextImage, 500);
            }
       } 
    }, [gameData]);
    
    // Efecto para mostrar las instrucciones automaticamente
    // useEffect(() => {
    //     if (modalBody.activated) {
    //         if (modalBody.step < step.instructions.length) {
    //             setTimeout(()=>{
    //                 setModalBody({
    //                     ...modalBody,
    //                     step: modalBody.step + 1,
    //                     data: step.instructions[modalBody.step]
    //                 });
    //             }, 4000);
    //         }
    //     }
    // }, [modalBody]);
    
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
                                <button onClick={handleNext}>continuar</button>
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
