import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { positions } from "../utils/simonValues";

import '../styles/pages/simon.scss';

import example from "../assets/images/example.png";
import example2 from "../assets/images/example2.png";
import keys from "../assets/images/keys.png";
import cross from "../assets/images/cross.png";

import circle1 from "../assets/images/circle1.png";

const DEFAULT_MODAL_BODY = [
    {
        title: "Bienvenido",
        body: "Pon tus dedos sobre los botones 'A' y 'L' de tu teclado",
        img: example
    },
    {
        title: "Te mostraremos unas figuras !!",
        body: "Las figuras pueden aparecera la izquierda o a la derecha, si ves un figura, aprieta, del mismo lado que la figura",
        img: example2
    },
    {
        title: "Estas listo para jugar ?",
        body: "Recuerda, aprieta el boton del mismo lado de la figura, intenta ser lo mas rapido posible al presionar el boton correcto",
        img: keys
    }
];


export default function Simon () {
    
    const [modal, setModal] = useState(true);
    const [modalBody, setModalBody] = useState({ step: 1, data: DEFAULT_MODAL_BODY[0] });
    const [styles, setStyles] = useState({
        index: 0, values: {} 
    });    
    const params = useParams();
    const { id } = params;

    const handleStart = () => {
        setModal(false);
        setModalBody({ step: 1, data: DEFAULT_MODAL_BODY[0] });
    };

    const handleKey = (event) => {
        if (!modal) {
            // const data = {

            // };
            console.log(event.keyCode);
        }
    };

    useEffect(() => {
        if (modal) {
            if (modalBody.step === 1) {
                setTimeout(()=>{
                    setModalBody({ step: 2, data: DEFAULT_MODAL_BODY[1] });
                }, 3000);
            } if (modalBody.step === 2) {
                setTimeout(()=>{
                    setModalBody({ step: 3, data: DEFAULT_MODAL_BODY[2] });
                }, 3000);
            }
        } else {
            setStyles({
                index: 1,
                values: positions[0].styles
            });
        }
    }, [modalBody, modal]);

    useEffect(() => {
        if (!modal) {
            if (styles.index < positions.length) {
                setTimeout(()=> {
                    setStyles({
                        index: styles.index + 1,
                        values: positions[styles.index + 1].styles
                    });
                }, 1000);
            }
        }
    }, [styles]);

    document.addEventListener('keydown', handleKey);

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
                                    modalBody.step === 3 && (
                                        <button onClick={handleStart}>Iniciar</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="simon-container">
                        <div className="image-game" style={styles.values}>
                            <img src={circle1} />
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
