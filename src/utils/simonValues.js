import example from "../assets/images/example.png";
import heart1 from "../assets/images/heart_example1.png";
import heart2 from "../assets/images/heart_example.png";
import heart3 from "../assets/images/heart_example2.png";
import keys from "../assets/images/keys.png";

const instructionsHearts = [
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
        Intenta ser lo mas rapido posible al presionar el boton correcto`,
        img: keys
    }
];

const instructionsFlowers = [
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
        Intenta ser lo mas rapido posible al presionar el boton correcto`,
        img: keys
    }
];

const positionsHearts = [
    {   
        index: 0,
        position: "rigth"
    },
    {
        index: 1,
        position: "rigth"
    },
    {   
        index: 2,
        position: "left"
    },
    {
        index: 3,
        position: "left",
    },
    {
        index: 4,
        position: "rigth"
    }
];

const positionsFlowers = [
    {   
        index: 1,
        position: "rigth"
    },
    {
        index: 2,
        position: "rigth"
    },
    {   
        index: 3,
        position: "left"
    },
    {
        index: 4,
        position: "left",
    },
    {
        index: 5,
        position: "rigth"
    }
];

export { positionsHearts, positionsFlowers, instructionsFlowers, instructionsHearts };