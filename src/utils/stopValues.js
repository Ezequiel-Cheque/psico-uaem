import example from "../assets/images/exampleStop2.png";
import signal from "../assets/images/stopSignal.png";

import rigth from "../assets/images/right.png";
import left from "../assets/images/left.png";

const instructions = [
{
    title: "Bienvenido",
    body: `A continuación, se mostrará una flecha, señalando una dirección específica.
    Si la flecha se encuentra hacia la izquierda debes presionar la tecla de lado izquierdo, si la flecha se encuentra hacia la derecha debes presionar la tecla de lado derecho. Si escuchas la señal de alto, no debes presionar ninguna tecla, sin importar hacia donde señale.
    `,
    img: example
},
{
    title: "Señal de alto",
    body: `Presiona el icono la bocina para escuchar la señal de alto, si no logras escucharla correctamente solicita apoyo al aplicador, si escuchas la señal claramente, presiona en Iniciar.`,
    img: signal
}
];

const instructionStart = [
    {
        title: "Juguemos un poco más",
        body: `Esta vez no te diremos si es correcto o incorrecto. Presiona el botón de continuar para iniciar el ejercicio.`,
        img: example
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

const withoutSignal1 = new Array(81);
const withoutSignal2 = new Array(81);
const withSignal1 = new Array(27);
const withSignal2 = new Array(27);

withoutSignal1.fill(1,0,81);
withSignal1.fill(81,0,27);
withoutSignal2.fill(108,0,81);
withSignal2.fill(189,0,27);

const positions2 = [
    ...withoutSignal1.map((id,index)=>(
        {   
            id: `PS${index + 1}`,
            signal: false,
            img: rigth,
            type: "prueba",
            key: "L" 
        }
    )),
    ...withSignal1.map((id, index)=>(
        {   
            id: `PS${id + (index + 1)}`,
            signal: true,
            img: rigth,
            type: "prueba",
            key: null
        }
    )),
    ...withoutSignal2.map((id, index)=>(
        {   
            id: `PS${id + (index + 1)}`,
            signal: false,
            img: left,
            type: "prueba",
            key: "A"
        }
    )),
    ...withSignal2.map((id, index)=>(
        {
            id: `PS${id + (index + 1)}`,
            signal: true,
            img: left,
            type: "prueba",
            key: "A"
        }
    ))
];

export { positions, instructions, instructionStart, positions2 };