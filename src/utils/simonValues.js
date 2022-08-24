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
        Intenta ser lo mas rapido posible al presionar el boton correcto, presiona en iniciar para hacer una prueba`,
        img: keys
    }
];

const instructionsHearts2 = [
    {
        title: "Juguemos un poco mas !!",
        body: `Pero esta vez no te diremos si es correcto.
        presiona el boton de continuar para empezar`,
        img: example
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
        Intenta ser lo mas rapido posible al presionar el boton correcto, presiona en iniciar para hacer una prueba`,
        img: keys
    }
];

const instructionsFlowers2 = [
    {
        title: "Juguemos un poco mas !!",
        body: `Pero esta vez no te diremos si es correcto.
        presiona el boton de continuar para empezar`,
        img: example
    }
];

const positionsHearts = [
    {   
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "test",
        name: "heart",
        id: "TH1"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "test",
        name: "heart",
        id: "TH2"
    },
    {   
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "test",
        name: "heart",
        id: "TH3"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "test",
        name: "heart",
        id: "TH4"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "test",
        name: "heart",
        id: "TH5"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "test",
        name: "heart",
        id: "TH6"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "test",
        name: "heart",
        id: "TH7"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "test",
        name: "heart",
        id: "TH8"
    }
];

const positionsHearts2 = [
    {   
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH1"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH2"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH3"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH4"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH5"
    },
    {   
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH6"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH7"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH8"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH9"
    },
    {
        position: "rigth",
        img: heart,
        class: "image-game--rigth",
        key: "L",
        type: "congruente",
        name: "heart",
        id: "CH10"
    },
    {   
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH11"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH12"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH13"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH14"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH15"
    },
    {   
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH16"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH17"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH18"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH19"
    },
    {
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        id: "CH20"
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

export {
    instructionsHearts,
    instructionsHearts2,
    positionsHearts,
    positionsHearts2,
    instructionsFlowers,
    positionsFlowers
};