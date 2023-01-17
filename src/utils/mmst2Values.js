import mmst1 from "../assets/images/mmst1.png";
import mmst2 from "../assets/images/mmst2.png";

import neutras1 from "../assets/images/neutras/2190.jpg";
import neutras2 from "../assets/images/neutras/5001.jpg";
import neutras3 from "../assets/images/neutras/5300.jpg";
import neutras4 from "../assets/images/neutras/7004.jpg";
import neutras5 from "../assets/images/neutras/7006.jpg";
import neutras6 from "../assets/images/neutras/7009.jpg";
import neutras7 from "../assets/images/neutras/7010.jpg";
import neutras8 from "../assets/images/neutras/7020.jpg";
import neutras9 from "../assets/images/neutras/7030.jpg";
import neutras10 from "../assets/images/neutras/7034.jpg";
import neutras11 from "../assets/images/neutras/7035.jpg";
import neutras12 from "../assets/images/neutras/7040.jpg";
import neutras13 from "../assets/images/neutras/7050.jpg";
import neutras14 from "../assets/images/neutras/7080.jpg";
import neutras15 from "../assets/images/neutras/7090.jpg";
import neutras16 from "../assets/images/neutras/7095.jpg";
import neutras17 from "../assets/images/neutras/7100.jpg";
import neutras18 from "../assets/images/neutras/7130.jpg";
import neutras19 from "../assets/images/neutras/7140.jpg";
import neutras20 from "../assets/images/neutras/7150.jpg";
import neutras21 from "../assets/images/neutras/7170.jpg";
import neutras22 from "../assets/images/neutras/7175.jpg";
import neutras23 from "../assets/images/neutras/7190.jpg";
import neutras24 from "../assets/images/neutras/7211.jpg";
import neutras25 from "../assets/images/neutras/7217.jpg";
import neutras26 from "../assets/images/neutras/7224.jpg";
import neutras27 from "../assets/images/neutras/7233.jpg";
import neutras28 from "../assets/images/neutras/7235.jpg";
import neutras29 from "../assets/images/neutras/7510.jpg";
import neutras30 from "../assets/images/neutras/7545.jpg";
import neutras31 from "../assets/images/neutras/7580.jpg";


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
    neutras10,
    neutras11,
    neutras12,
    neutras13,
    neutras14,
    neutras15,
    neutras16,
    neutras17,
    neutras18,
    neutras19,
    neutras20,
    neutras21,
    neutras22,
    neutras23,
    neutras24,
    neutras25,
    neutras26,
    neutras27,
    neutras28,
    neutras29,
    neutras30,
    neutras31
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
