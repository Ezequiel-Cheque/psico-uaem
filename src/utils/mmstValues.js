import mmst1 from "../assets/images/mmst1.png";
import mmst2 from "../assets/images/mmst2.png";

import positivas0 from "../assets/images/positivas/1440.jpg";
import positivas1 from "../assets/images/positivas/1460.jpg";
import positivas2 from "../assets/images/positivas/1463.jpg";
import positivas3 from "../assets/images/positivas/1540.jpg";
import positivas4 from "../assets/images/positivas/1603.jpg";
import positivas5 from "../assets/images/positivas/1610.jpg";
import positivas6 from "../assets/images/positivas/1710.jpg";
import positivas7 from "../assets/images/positivas/1750.jpg";
import positivas8 from "../assets/images/positivas/2057.jpg";
import positivas9 from "../assets/images/positivas/2080.jpg";
import positivas10 from "../assets/images/positivas/2260.jpg";
import positivas11 from "../assets/images/positivas/2655.jpg";
import positivas12 from "../assets/images/positivas/2660.jpg";

import neutras0 from "../assets/images/previasMMST/1.jpg";
import neutras1 from "../assets/images/previasMMST/2.jpg";
import neutras2 from "../assets/images/previasMMST/3.jpg";
import neutras3 from "../assets/images/previasMMST/4.jpg";
import neutras4 from "../assets/images/previasMMST/5.jpg";
import neutras5 from "../assets/images/previasMMST/6.jpg";
import neutras6 from "../assets/images/previasMMST/7.jpg";
import neutras7 from "../assets/images/previasMMST/8.jpg";
import neutras8 from "../assets/images/previasMMST/9.jpg";
import neutras9 from "../assets/images/previasMMST/10.jpg";
import neutras10 from "../assets/images/previasMMST/11.jpg";
import neutras11 from "../assets/images/previasMMST/12.jpg";
import neutras12 from "../assets/images/previasMMST/13.jpg";


import negativas1 from "../assets/images/negativas/1.jpg";
import negativas2 from "../assets/images/negativas/2.jpg";
import negativas3 from "../assets/images/negativas/3.jpg";
import negativas4 from "../assets/images/negativas/4.jpg";
import negativas5 from "../assets/images/negativas/5.jpg";
import negativas6 from "../assets/images/negativas/6.jpg";
import negativas7 from "../assets/images/negativas/7.jpg";
import negativas8 from "../assets/images/negativas/8.jpg";
import negativas9 from "../assets/images/negativas/9.jpg";
import negativas10 from "../assets/images/negativas/10.jpg";
import negativas11 from "../assets/images/negativas/11.jpg";
import negativas12 from "../assets/images/negativas/12.jpg";
import negativas13 from "../assets/images/negativas/13.jpg";
import negativas14 from "../assets/images/negativas/14.jpg";
import negativas15 from "../assets/images/negativas/15.jpg";
import negativas16 from "../assets/images/negativas/16.jpg";
import negativas17 from "../assets/images/negativas/17.jpg";
import negativas18 from "../assets/images/negativas/18.jpg";
import negativas19 from "../assets/images/negativas/19.jpg";
import negativas20 from "../assets/images/negativas/20.jpg";
import negativas21 from "../assets/images/negativas/21.jpg";
import negativas22 from "../assets/images/negativas/22.jpg";
import negativas23 from "../assets/images/negativas/23.jpg";
import negativas24 from "../assets/images/negativas/24.jpg";
import negativas25 from "../assets/images/negativas/25.jpg";
import negativas26 from "../assets/images/negativas/1.jpg";
import negativas27 from "../assets/images/negativas/2.jpg";
import negativas28 from "../assets/images/negativas/3.jpg";
import negativas29 from "../assets/images/negativas/6.jpg";
import negativas30 from "../assets/images/negativas/7.jpg";
import negativas31 from "../assets/images/negativas/8.jpg";
import negativas32 from "../assets/images/negativas/9.jpg";
import negativas33 from "../assets/images/negativas/11.jpg";
import negativas34 from "../assets/images/negativas/12.jpg";
import negativas35 from "../assets/images/negativas/15.jpg";
import negativas36 from "../assets/images/negativas/16.jpg";
import negativas37 from "../assets/images/negativas/17.jpg";
import negativas38 from "../assets/images/negativas/18.jpg";
import negativas39 from "../assets/images/negativas/19.jpg";
import negativas40 from "../assets/images/negativas/20.jpg";
import negativas41 from "../assets/images/negativas/21.jpg";
import negativas42 from "../assets/images/negativas/22.jpg";
import negativas43 from "../assets/images/negativas/23.jpg";
import negativas44 from "../assets/images/negativas/24.jpg";


const positivas = [
    positivas0,
    positivas1,
    positivas2,
    positivas3,
    positivas4,
    positivas5,
    positivas6,
    positivas7,
    positivas8,
    positivas9,
    positivas10,
    positivas11,
    positivas12
];

const negativas = [
    negativas1,
    negativas2,
    negativas3,
    negativas4,
    negativas5,
    negativas6,
    negativas7,
    negativas8,
    negativas9,
    negativas10,
    negativas11,
    negativas12,
    negativas13,
    negativas14,
    negativas15,
    negativas16,
    negativas17,
    negativas18,
    negativas19,
    negativas20,
    negativas21,
    negativas22,
    negativas23,
    negativas24,
    negativas25,
    negativas26,
    negativas27,
    negativas28,
    negativas29,
    negativas30,
    negativas31,
    negativas32,
    negativas33,
    negativas34,
    negativas35,
    negativas36,
    negativas37,
    negativas38,
    negativas39,
    negativas40,
    negativas41,
    negativas42,
    negativas43,
    negativas44
];

const neutras = [
    neutras0,
    neutras1,
    neutras2,
    neutras3,
    neutras4,
    neutras5,
    neutras6,
    neutras7,
    neutras8,
    neutras9,
    neutras10,
    neutras11,
    neutras12
];

const getAleatoryImages = (num, type) => {
    let arrayImages = [];
    const newImages = [];
    if (type === "positivas") {
        arrayImages = [...positivas];
    } else if (type === "negativas") {
        arrayImages = [...negativas];
    } else if (type === "neutras") {
        arrayImages = [...neutras];
    }
    for (let i = 0; i < num; i++) {
        const min = 0;
        const max = arrayImages.length - 1;
        const x = Math.floor(Math.random()*(max-min+1)+min);
        const newData = arrayImages[x];
        arrayImages = [...arrayImages.slice(0, x), ...arrayImages.slice(x + 1, arrayImages.length)];
        newImages.push(newData);
    }
    return newImages;
};

const images1 = neutras.map((item, index) => (
    {
        id: index,
        img: item,
        time: 5000
    }
));

const images2 = [
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {
            id: index,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {
            id: index + 5,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 6,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 11,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 12,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 17,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 18,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 23,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 24,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 29,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 30,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 35,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 36,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 41,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 42,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 47,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 48,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 53,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 54,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 59,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 60,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 65,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 66,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 71,
            img: item,
            time: 3000
        }
    )),
    ...getAleatoryImages(5, "negativas").map((item, index) => (
        {   
            id: index + 72,
            img: item,
            time: 5000
        }
    )),
    ...getAleatoryImages(1, "positivas").map((item, index) => (
        {   
            id: index + 77,
            img: item,
            time: 3000
        }
    ))
];

const instructions = [
    {
        title: "Tarea de suma en serie",
        body:`Verás una serie de números de un dígito en un recuadro negro,
        que se presentarán cada 3 segundos (sumar mentalmente).
         Los números para responder se mostrarán en forma de círculo,
          al rededor de dicho recuadro (seleccionar la respuesta con el ratón).`,
        img: mmst1,
        size: "200px"
    },
    {
        title: "Tarea de suma en serie",
        body:`Espera por los primeros dos números,
         sumalos en tu mente e indica tu respuesta presionando el número que consideres correcto en el círculo de resúesta de color azul,
          hazlo tan rápido como sea posible, cuando veas el siguiente número en el recuadro negro,
           debes sumarlo con el que se mostró ahí anteriormente,
            continua con la suma cada que aparezca un nuevo número en el recuadro.
             Por cada error que tengas perderás puntos. Presiona en iniciar para comenzar con una prueba.`,
        img: mmst2,
        size: "100%"
    }
];

const instructionStart = [
    {
        title: "¡Juguemos un poco más!",
        body: `Pero esta vez no te diremos si es correcto.
        presiona el botón de continuar para empezar`,
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
    ...[0,1,2,3,4,5,6,7].map((item)=>(
        {
            id: `P${item}`,
            index: item,
            number:  getAleatory(),
            type: "test",
            time: 3000,
            level: 1
        }
    )),
    ...[8,9,10,11,12,13,14,15].map((item)=>(
        {   
            id: `P${item}`,
            index: item,
            number:  getAleatory(),
            type: "test",
            time: 3000
        }
    )),
    ...[16,17,18,19,20,21,22,23].map((item)=>(
        {   
            id: `P${item}`,
            index: item,
            number:  getAleatory(),
            type: "test",
            time: 3000
        }
    ))
];

// const leve1 = new Array(5);

const leve1 = new Array(40);
const leve2 = new Array(60);
const leve3 = new Array(60);

const mmstPrueba2 = [
    ...leve1.fill(1,0).map((item, index)=>(
        {
            id: `T${index}`,
            index: index,
            number:  getAleatory(),
            type: "prueba",
            time: 3000,
            level: 1
        }
    )),
    ...leve2.fill(1,0).map((item, index)=>(
        {   
            id: `T${index + 40}`,
            index: index + 40,
            number:  getAleatory(),
            type: "prueba",
            time: 2000
        }
    )),
    ...leve3.fill(1,0).map((item, index)=>(
        {   
            id: `T${index + 100}`,
            index: index + 100,
            number:  getAleatory(),
            type: "prueba",
            time: 1000
        }
    ))
];

export {
    mmstPrueba,
    mmstPrueba2,
    instructions,
    instructionStart,
    images1,
    images2
};
