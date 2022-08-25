import example from "../assets/images/exampleStop2.png";
import signal from "../assets/images/stopSignal.png";

import rigth from "../assets/images/right.png";
import left from "../assets/images/left.png";

const instructions = [
{
    title: "Bienvenido Stop test",
    body: `En el test, aparecen senales, mostrandote una direccion.
    Para la direccion izquierda, debes precionar la tecla A, para la direccion derecha
    debes presionar la tecla L, cuando escuches la senal de stop, no debes presionar ninguna tecla`,
    img: example
},
{
    title: "Senal de stop",
    body: `Presiona la barra espaciadora para escuchar la senal de stop, si no logras escucharla
    correctamente, ajusta tu volumen, da clic, de nuevo en el icono, si todo esta bien, presiona en continuar`,
    img: signal
}
];

const positions = [
...[1,2,3,4,5,6,7,8,9,10,11,12].map((id)=>(
    {   
        id: `TS${id}`,
        signal: false,
        img: rigth,
        type: "test",
        key: "L" 
    }
)),
...[13,14,15,16].map((id)=>(
    {   
        id: `TS${id}`,
        signal: true,
        img: rigth,
        type: "test",
        key: null
    }
)),
...[17,18,19,20,21,22,23,24,25,26,27,28].map((id)=>(
    {   
        id: `TS${id}`,
        signal: false,
        img: left,
        type: "test",
        key: "A"
    }
)),
...[29,30,31,32].map((id)=>(
    {   
        id: `TS${id}`,
        signal: true,
        img: left,
        type: "test",
        key: "A"
    }
))
];

export { positions, instructions };