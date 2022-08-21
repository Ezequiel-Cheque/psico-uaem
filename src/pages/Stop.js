import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";

import { positions } from "../utils/stopValues";

import '../styles/pages/stop.scss';

import example from "../assets/images/exampleStop2.png";
import signal from "../assets/images/stopSignal.png";

import rigth from "../assets/images/right.png";
import left from "../assets/images/left.png";

const DEFAULT_MODAL_BODY = [
    {
        title: "Bienvenido Stop test",
        body: `En el test, aparecen senales, mostrandote una direccion.
        Para la direccion izquierda, debes precionar la tecla A, para la direccion derecha
        debes presionar la tecla L, cuando escuches la senal de stop, no debes presionar ninguna tecla`,
        img: example
    },
    {
        title: "Senal de stop",
        body: `Da clic en el icono para escuchar la senal de stop, si no logras escucharla
        correctamente, ajusta tu volumen, da clic, de nuevo en el icono, si todo esta bien, presiona en continuar`,
        img: signal
    }
];

export default function Stop() {

    const [modal, setModal] = useState(true);
    const [modalBody, setModalBody] = useState({ step: 1, data: DEFAULT_MODAL_BODY[0] });
    const [signal, setSignal] = useState({ index: 0, image: "" });

    const params = useParams();
    const { id } = params;

    const handleStart = () => {
        setModal(false);
    };

    useEffect(() => {
        if (modal) {
            if (modalBody.step === 1) {
                setTimeout(()=>{
                    setModalBody({ step: 2, data: DEFAULT_MODAL_BODY[1] });
                }, 5000);
            }
        } else {
            setSignal({
                index: 1,
                image: positions[0].position === "rigth" ? rigth : left
            });
        }
    }, [modalBody, modal]);

    useEffect(() => {
        if (!modal) {
            if (signal.index < positions.length) {
                setTimeout(()=> {
                    setSignal({
                        index: signal.index + 1,
                        image: positions[signal.index + 1].position === "rigth" ? rigth : left
                    });
                }, 1000);
            }
        }
    }, [signal]);

    console.log(signal);
    return (
        <div className="simon">
            {
                modal ? (
                    <div className="modal">
                        <div className="modal-container">
                            <div className="modal-container-text">
                                <h1>{modalBody.data.title}</h1>
                                <img src={modalBody.data.img} />
                                <p>{modalBody.data.body}</p>
                                {
                                    modalBody.step === 2 && (
                                        <button onClick={handleStart}>Iniciar</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="stop-container">
                        <div className="image-game">
                            <img src={signal.image} />
                        </div>
                    </div>
                )
            }  
        </div>
    );

}
