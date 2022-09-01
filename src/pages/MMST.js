import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

import { instructions, mmstPrueba, instructionStart } from "../utils/mmstValues";

// import stopSound from "../assets/audio/stop.mp3";

import positiva1 from "../assets/images/positiva1.jpg";

import '../styles/pages/mmst.scss';


const stopSteps = [
    {
        step: 0,
        name: "Prueba",
        instructions: instructions,
        values: [...mmstPrueba]
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
    values: []
};

const DEFAULT_GAME_DATA = {
    id: 0,
    number:  0,
    type: "",
    time: 0
};

let gameValues;
let intVal;
let results = {};
const responses = [];

export default function MMST() {

    const [modalBody, setModalBody] = useState(MODAL_DEFAULT_DATA);
    const [gameData, setGameData] = useState(DEFAULT_GAME_DATA);
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


    // const nextImage = () => {
    //     if (gameValues.length > 0) {
    //         setGameData({
    //             ...gameData,
    //             ...getAleatory(),
    //             timeStart: Date.now()
    //         });
    //     } else {
    //         if (step.step === 0) {
    //             results = {
    //                 ...results,
    //                 Practica: responses.filter((res)=>res.type === "test")
    //             };
    //         } if (step.step === 1) {
    //             results = {
    //                 ...results,
    //                 Ensayo: responses.filter((res)=>res.type === "prueba")
    //             };
    //         }
    //         setGameData(DEFAULT_GAME_DATA);
    //         nextStep();
    //     }
    // };

    // const clearImage = () => {
    //     setGameData({
    //         ...gameData,
    //         img: "",
    //         key: "None"
    //     });
    // };

    // const handleStart = () => {
    //     gameValues = [...step.values]
    //     setModalBody(MODAL_DEFAULT_DATA);
    //     const newData = getAleatory();
    //     setGameData({
    //         ...gameData,
    //         ...newData,
    //         activated: true,
    //         timeStart: Date.now()
    //     });
    // };

    // const saveResponse = (keyPress) => {
    //     const response = {
    //         title: step.name,
    //         id: gameData.id,
    //         key: gameData.key,
    //         type: gameData.type,
    //         signal: gameData.signal,
    //         response: gameData.key === keyPress ? true: false,
    //         keyPress,
    //         time: `${((Date.now() - gameData.timeStart) / 1000)}s`
    //     };
    //     const exist = responses.filter((res)=>res.id === gameData.id);
    //     if (exist.length === 0) {
    //         responses.push(response);
    //         return true;
    //     } else {
    //         false
    //     }
    // };

    // const handleKey = (event) => {
    //     const keyPress = String.fromCharCode(event.keyCode);
    //     if (gameData.activated && gameData.key !== "None") {
    //         if (saveResponse(keyPress)) {
    //             if (gameData.type === "test") {
    //                 if ((keyPress !== gameData.key) && !gameData.signal) {
    //                     const errorMsg = `Debes presionar la tecla correspondiente, en este caso es la tecla ${keyPress === "A" ? "L" : "A"}`; 
    //                     clearInterval(intVal);
    //                     swal({
    //                         title: "Error",
    //                         text: errorMsg,
    //                         icon: "error",
    //                         button: "ok",
    //                     }).then((value) => {
    //                         clearImage();
    //                     });
    //                 } else if ((keyPress === gameData.key) && !gameData.signal) {
    //                     clearInterval(intVal);
    //                     swal({
    //                         title: "Correcto !!",
    //                         text: "Buen trabajo",
    //                         icon: "success",
    //                         timer: 1200,
    //                         buttons: false
    //                     }).then((value) => {
    //                         clearImage();
    //                     });
    //                 } else if (gameData.signal) {
    //                     const errorMsg = "Cuando suena la senal de stop, no debes precionar ninguna tecla";
    //                     clearInterval(intVal);
    //                     swal({
    //                         title: "Error",
    //                         text: errorMsg,
    //                         icon: "error",
    //                         button: "ok",
    //                     }).then((value) => {
    //                         clearImage();
    //                     });
    //                 }
    //             } else {
    //                 if (!gameData.signal) {
    //                     clearInterval(intVal);
    //                     clearImage();
    //                 }
    //             }
    //         }
    //     } else if (modalBody.activated && modalBody.step === step.instructions.length) {
    //         if (keyPress === " ") {
    //             playStopSound();
    //         }
    //     }
    // };

    // // Efecto para mostrar las imagenes
    // useEffect(() => {
    //     if (gameData.activated) {
    //          if (gameData.img !== "" && gameValues.length >= 0) {
    //             setTimeout(()=>{
    //                 if (gameData.signal) {
    //                     playStopSound();
    //                 }
    //             }, 250);
    //              intVal = setTimeout(()=>{
    //                  const exist = responses.filter((res)=>res.id === gameData.id);
    //                  if (exist.length === 0) {
    //                      saveResponse(null);
    //                      if (gameData.type === "test" && !gameData.signal) {
    //                          clearInterval(intVal);
    //                          const errorMsg = `Ups, se te ha pasado el tiempo, procura ser mas rapido en tu respuesta`;
    //                          swal({
    //                              title: "Error",
    //                              text: errorMsg,
    //                              icon: "error",
    //                              button: "ok",
    //                          }).then((value) => {
    //                              clearImage();
    //                          });
    //                      } else if (gameData.type === "test" && gameData.signal) {
    //                         swal({
    //                             title: "Correcto !!",
    //                             text: "Buen trabajo",
    //                             icon: "success",
    //                             timer: 1200,
    //                             buttons: false
    //                         }).then((value) => {
    //                             clearImage();
    //                         });
    //                      } else {
    //                          clearImage();    
    //                      }
    //                  } else {
                        
    //                     clearImage();
    //                  }
    //              }, 2000);
    //          } else if (gameData.img === "") {
    //              intVal = setTimeout(nextImage, 500);
    //          }
    //     } 
    //  }, [gameData]);

    // // Efecto para mostrar las instrucciones automaticamente
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

    // // use Effect para resetear el evento que escucha la tecla a presionar
    // useEffect(() => {
    //     document.removeEventListener('keydown', handleKey);
    //     document.addEventListener('keydown', handleKey);
    //     return () => {
    //         document.removeEventListener('keydown', handleKey);
    //     }
    // }, [gameData, modalBody]);

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
                    <div className="mmst-container">
                        <div className= "num-section">
                            <div className="num-section--value">{gameData.number}</div>
                            <div className="num-section--score">
                                <label>Score</label><input name="score" type="text" readOnly/>
                            </div>
                            <div className="num-section--first">
                                <div className="num-section-number">1</div>
                                <div className="num-section-number">2</div>
                                <div className="num-section-number">3</div>
                                <div className="num-section-number">4</div>
                                <div className="num-section-number">5</div>
                                <div className="num-section-number">6</div>
                            </div>
                            <div className="num-section--second">
                                <div className="num-section-number">7</div>
                                <div className="num-section-number">8</div>
                            </div>
                            <div className="num-section--trhird">
                                <div className="num-section-number">9</div>
                                <div className="num-section-number">10</div>
                            </div>
                            <div className="num-section--fourth">
                                <div className="num-section-number">11</div>
                                <div className="num-section-number">12</div>
                            </div>
                            <div className="num-section--end">
                                <div className="num-section-number">13</div>
                                <div className="num-section-number">14</div>
                                <div className="num-section-number">15</div>
                                <div className="num-section-number">16</div>
                                <div className="num-section-number">17</div>
                                <div className="num-section-number">18</div>
                            </div>
                        </div>
                        <div className="img-section">
                            <img src={positiva1} />
                        </div>
                    </div>
                )
            }  
        </div>
    );

}
