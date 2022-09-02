import mmst1 from "../assets/images/mmst1.png";
import mmst2 from "../assets/images/mmst2.png";

import positivas1 from "../assets/images/2165.jpg";
import positivas2 from "../assets/images/2530.jpg";
import positivas3 from "../assets/images/2655.jpg";
import positivas4 from "../assets/images/2660.jpg";
import positivas5 from "../assets/images/4653.jpg";
import positivas6 from "../assets/images/4750.jpg";
import positivas7 from "../assets/images/5250.jpg";
import positivas8 from "../assets/images/5260.jpg";
import positivas9 from "../assets/images/5593.jpg";
import positivas10 from "../assets/images/5760.jpg";

const positivas = {
    positivas1,
    positivas2,
    positivas3,
    positivas4,
    positivas5,
    positivas6,
    positivas7,
    positivas8,
    positivas9,
    positivas10
};

const images1 = [
    ...[1,2,3,4,5,6].map((item)=>(
        {
            img: positivas[`positivas${item}`],
            time: 2000
        }
    ))
];

const images2 = [
    ...[1,2,3,4,5, 6, 7, 8, 9, 10].map((item)=>(
        {
            img: positivas[`positivas${item}`],
            time: 2000
        }
    ))
];

const instructions = [
    {
        title: "Tarea de suma en serie",
        body:`Veras una serie de numeros de un digito, que se presentaran cada 3 segundos.
        Los numero seran presentados juntos como este circulo de numeros.`,
        img: mmst1,
        size: "200px"
    },
    {
        title: "Tarea de suma en serie",
        body:`Espera por los primeros dos numeros, sumalos en tu mente, e indica tu respuesta en el numero de circulos, tan rapido como sea posible.
        Cuando veas el siguiente numero, sumalo con el ultimo numero presentado justo antes de ese, continua con la suma de los numero siguientes.
        Perderas puntos por cada error que obtengas.
        Presiona en iniciar, para comenzar con una prueba`,
        img: mmst2,
        size: "100%"
    }
];

const instructionStart = [
    {
        title: "Juguemos un poco mas !!",
        body: `Pero esta vez no te diremos si es correcto.
        presiona el boton de continuar para empezar`,
        img: mmst1
    }
];

const getAleatory = () => {
    const min = 1;
    const max = 9;
    const x = Math.floor(Math.random()*(max-min+1)+min);
    return x;
};

const mmstPrueba = [
    ...[1,2,3,4,5,6,7,8].map((item)=>(
        {   
            id: item,
            number:  getAleatory(),
            type: "test",
            time: 3000
        }
    )),
    // ...[9,10,11,12,13,14,15,16].map((item)=>(
    //     {   
    //         id: item,
    //         number:  getAleatory(),
    //         type: "test",
    //         time: 2000
    //     }
    // )),
    // ...[17,18,19,20,21,22,23,24].map((item)=>(
    //     {   
    //         id: item,
    //         number:  getAleatory(),
    //         type: "test",
    //         time: 1000
    //     }
    // ))
];

export {
    mmstPrueba,
    instructions,
    instructionStart,
    images1,
    images2
};