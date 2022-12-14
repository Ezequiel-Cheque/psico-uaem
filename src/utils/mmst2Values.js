import mmst1 from "../assets/images/mmst1.png";
import mmst2 from "../assets/images/mmst2.png";

import neutras1 from "../assets/images/neutras/2057.jpg";
import neutras2 from "../assets/images/neutras/3181.jpg";
import neutras3 from "../assets/images/neutras/6550.jpg";
import neutras4 from "../assets/images/neutras/3530.jpg";
import neutras5 from "../assets/images/neutras/3550.jpg";
import neutras6 from "../assets/images/neutras/9040.jpg";
import neutras7 from "../assets/images/neutras/6560.jpg";
import neutras8 from "../assets/images/neutras/3301.jpg";
import neutras9 from "../assets/images/neutras/1440.jpg";
import neutras10 from "../assets/images/neutras/8230.jpg";

const neutras = [
    neutras1,
    neutras2,
    neutras3,
    neutras4,
    neutras5,
    neutras6,
    neutras7,
    neutras8,
    neutras9,
    neutras10
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
        // arrayImages = [...arrayImages.slice(0, x), ...arrayImages.slice(x + 1, arrayImages.length)];
        newImages.push(newData);
    }
    return newImages;
};

const images1 = [
    ...getAleatoryImages(60, "neutras").map((item, index) => (
        {   
            id: index,
            img: item,
            time: 5000
        }
    ))
]

const instructionStart = [
    {
        title: "Prueba sin estres",
        body: `Esta prueba esta hecha para no recibir estrés`,
        img: mmst1
    }
];

const getAleatory = () => {
    const min = 1;
    const max = 9;
    const x = Math.floor(Math.random()*(max-min+1)+min);
    return x;
};

const leve1 = new Array(180);

// const leve1 = new Array(40);
// const leve2 = new Array(60);
// const leve3 = new Array(60);

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
    ))
    // ,
    // ...leve2.fill(1,0).map((item, index)=>(
    //     {   
    //         id: `T${index + 40}`,
    //         index: index + 40,
    //         number:  getAleatory(),
    //         type: "prueba",
    //         time: 2000
    //     }
    // )),
    // ...leve3.fill(1,0).map((item, index)=>(
    //     {   
    //         id: `T${index + 100}`,
    //         index: index + 100,
    //         number:  getAleatory(),
    //         type: "prueba",
    //         time: 1000
    //     }
    // ))
];

export {
    mmstPrueba2,
    instructionStart,
    images1
};
