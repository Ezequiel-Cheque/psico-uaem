import example from "../assets/images/example.png";
import heart1 from "../assets/images/heart_example1.png";
import heart2 from "../assets/images/heart_example.png";
import heart3 from "../assets/images/heart_example2.png";
import keys from "../assets/images/keys.png";

const instructions = [
    {
        title: "Bienvenido",
        body: "Pon tus dedos sobre los botones 'A' y 'L' de tu teclado",
        img: example
    },
    {
        title: "Te mostraremos unos corazones !!",
        body: "Los corazones pueden aparecera la izquierda o a la derecha",
        img: heart1
    },
    {
        title: `Si ves un corazon:
        Aprieta el botón DEL MISMO lado que el corazón`,
        body: "si ves el corazón en este lado: aprieta este boton",
        img: heart2
    },
    {
        title: `Si ves un corazon:
        Aprieta el botón DEL MISMO lado que el corazón`,
        body: "si ves el corazón en este lado: aprieta este boton",
        img: heart3
    },
    {
        title: "¿Estas listo para jugar?",
        body: `Recuerda:
        aprieta el boton del mismo lado que veas el corazon.
        Intenta ser lo mas rapido posible al presionar el boton correcto, presiona en iniciar para hacer una prueba`,
        img: keys
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
            type: test,
            time: 3000
        }
    )),
    ...[9,10,11,12,13,14,15,16].map((item)=>(
        {   
            id: item,
            number:  getAleatory(),
            type: test,
            time: 2000
        }
    )),
    ...[17,18,19,20,21,22,23,24].map((item)=>(
        {   
            id: item,
            number:  getAleatory(),
            type: test,
            time: 1000
        }
    ))
];

export {
    mmstPrueba,
    instructions
};
