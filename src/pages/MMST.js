import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { instructions, mmstPrueba, instructionStart, images1, images2 } from "../utils/mmstValues";

// import stopSound from "../assets/audio/stop.mp3";

import  coin from "../assets/images/coin.png";

import '../styles/pages/mmst.scss';


const mmstSteps = [
    // {
    //     step: 0,
    //     name: "Imagenes",
    //     instructions: [],
    //     values: [],
    //     images: images1
    // },
    {
        step: 1,
        name: "Prueba",
        instructions: instructions,
        values: [...mmstPrueba],
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
    timeStart: 0
};

const DEFAULT_IMAGES_DATA = {
    img: "",
    time: 0,
    id: null
};

let imageValues = null;
let intVal;
let results = {};
const responses = [];

export default function MMST() {

    const [modalBody, setModalBody] = useState(MODAL_DEFAULT_DATA);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
    const [imagesData, setImagesData] = useState(DEFAULT_IMAGES_DATA);
    const [step, setStep] = useState(DEFAULT_STEP);

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
                newData = [...restData, { id, date: date.toLocaleDateString(), test: [...userData.test, mmstTestData] }];
            } else {
                newData = [...data, { id, date: date.toLocaleDateString(), test: [mmstTestData] }];    
            }
        } else {
            newData = [{ id, date: date.toLocaleDateString(), test: [mmstTestData] }];
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
                // saveAllData();
                navigate(`/user/${id}`);
            });
        }
    };

    const saveResponse = (keyPress) => {
        if (gameData.number !== "") {
            console.log("number saved");
            const response = {
                title: step.name,
                id: gameData.id,
                type: gameData.type,
                level: gameData.level,
                response: (gameData.oldNumber + gameData.number) === keyPress ? true: false,
                keyPress,
                correct: gameData.oldNumber + gameData.number,
                time: `${((Date.now() - gameData.timeStart) / 1000)}s`
            };
            const exist = responses.filter((res)=>res.id === gameData.id);
            if (exist.length === 0) {
                responses.push(response);
                return true;
            } else {
                false
            }
        }
    };

    const handleStart = () => {
        setModalBody(MODAL_DEFAULT_DATA);
        setGameData({
            ...gameData,
            ...step.values[0],
            activated: true,
            timeStart: Date.now()
        });
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
        // saveResponse(numberSelected);
    };

    const clearNumber = () => {
        setGameData({
            ...gameData,
            number: ""
        });
    };

    const nextNumber = () => {
        if (gameData.id < step.values.length -1) {
            const newData = step.values[gameData.id + 1];
            // const exist = responses.filter((res)=>res.id === gameData.id);
            // if (exist.length === 0) {
            //     saveResponse(null);
            // }
            setGameData({
                ...gameData,
                ...newData,
                oldNumber: step.values[gameData.id].number,
                timeStart: Date.now()
            });          
        } else {
           console.log("final del juego");
           console.log(responses);
        }
    };

    console.log(gameData);
    // // Efecto para mostrar los numeros
    useEffect(() => {
        if (gameData.activated) {
            if (gameData.number !== "") {
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
        } else if (step.step === 1) {
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
                                        <input name="score" type="text" readOnly/>
                                    </div>
                                    <div className="num-section--first">
                                        <div className="num-section-number" onClick={handleClick}>1</div>
                                        <div className="num-section-number" onClick={handleClick}>2</div>
                                        <div className="num-section-number" onClick={handleClick}>3</div>
                                        <div className="num-section-number" onClick={handleClick}>4</div>
                                        <div className="num-section-number" onClick={handleClick}>5</div>
                                        <div className="num-section-number" onClick={handleClick}>6</div>
                                    </div>
                                    <div className="num-section--second">
                                        <div className="num-section-number" onClick={handleClick}>7</div>
                                        <div className="num-section-number" onClick={handleClick}>8</div>
                                    </div>
                                    <div className="num-section--trhird">
                                        <div className="num-section-number" onClick={handleClick}>9</div>
                                        <div className="num-section-number" onClick={handleClick}>10</div>
                                    </div>
                                    <div className="num-section--fourth">
                                        <div className="num-section-number" onClick={handleClick}>11</div>
                                        <div className="num-section-number" onClick={handleClick}>12</div>
                                    </div>
                                    <div className="num-section--end">
                                        <div className="num-section-number" onClick={handleClick}>13</div>
                                        <div className="num-section-number" onClick={handleClick}>14</div>
                                        <div className="num-section-number" onClick={handleClick}>15</div>
                                        <div className="num-section-number" onClick={handleClick}>16</div>
                                        <div className="num-section-number" onClick={handleClick}>17</div>
                                        <div className="num-section-number" onClick={handleClick}>18</div>
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
