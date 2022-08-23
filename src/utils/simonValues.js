import example from "../assets/images/example.png";
import heart1 from "../assets/images/heart_example1.png";
import heart2 from "../assets/images/heart_example.png";
import heart3 from "../assets/images/heart_example2.png";
import keys from "../assets/images/keys.png";
import heart from "../assets/images/heart.png";
import flower from "../assets/images/flower.png";

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
        Intenta ser lo mas rapido posible al presionar el boton correcto, preciona en iniciar para hacer una prueba`,
        img: keys
    }
];

const positionsHearts = [
    {   
        index: 0,
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "test",
        name: "heart"
    },
    {
        index: 1,
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "test",
        name: "heart"
    },
    {   
        index: 2,
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "test",
        name: "heart"
    },
    {
        index: 3,
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "test",
        name: "heart"
    },
    {
        index: 4,
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "test",
        name: "heart"
    },
    {
        index: 5,
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "test",
        name: "heart"
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