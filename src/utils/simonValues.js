import example from "../assets/images/example.png";
// import heart1 from "../assets/images/heart_example1.png";
import heart2 from "../assets/images/heart_example.png";
import heart3 from "../assets/images/heart_example2.png";
import keys from "../assets/images/keys.png";
import heart from "../assets/images/heart.png";
import flower from "../assets/images/flower.png";
import flower1 from "../assets/images/flower1.png";
import flower2 from "../assets/images/flower2.png";
import flower3 from "../assets/images/flower3.png";
import mixto from "../assets/images/example-mixto.png";

const instructionsHearts = [
    {
        title: "Bienvenido",
        body: "Coloca tus dedos índices sobre las teclas izquierda y derecha de tu teclado",
        img: example
    },
    {
        title: "Te mostraremos un corazón, presiona el botón del mismo lado en que se muestre el corazón.",
        body: "Si ves el corazón de lado derecho, presiona la tecla de lado derecho.",
        img: heart2
    },
    {
        title: "¿Estás listo para iniciar?",
        body: `Recuerda, presiona el botón del mismo lado que se muestre el corazón, intenta ser lo más rápido posible al responder. Presiona continuar para iniciar una prueba del ejercicio.`,
        img: keys
    }
];

const instructionsFlowers = [
    {
        title: "Bienvenido",
        body: "Coloca tus dedos índices sobre las teclas izquierda y derecha de tu teclado",
        img: example
    },
    {
        title: "Te mostraremos una flor, presiona el botón del mismo lado en que se muestre la flor",
        body: `Si ves la flor de lado derecho, presiona la tecla de lado izquierdo.`,
        img: flower2
    },
    {
        title: "¿Estás listo para iniciar?",
        body: `Recuerda, presiona el botón del lado OPUESTO que se muestre la flor, intenta ser lo más rápido posible al responder. Presiona continuar para iniciar una prueba del ejercicio.`,
        img: flower
    }
];

const instructionsMixto = [
    {
        title: "Vamos a juntar todo!",
        body: "Coloca tus dedos índices sobre las teclas izquierda y derecha de tu teclado",
        img: example
    },
    {
        title: "Ahora te mostraremos corazones y flores !!",
        body: `Las flores y los corazones pueden aparecer a la izquierda o a la derecha`,
        img: flower1
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
        title: `Si ves la flor:
        Aprieta el botón del lado OPUESTO de la flor`,
        body: "si ves la flor en este lado: aprieta este boton",
        img: flower2
    },
    {
        title: `Si ves la flor:
        Aprieta el botón del lado OPUESTO de la flor`,
        body: "si ves la flor en este lado: aprieta este boton",
        img: flower3
    },
    {
        title: "¿Estas listo para jugar?",
        body: `Recuerda:
        aprieta el boton del lado OPUESTO de donde veas la flor, y el boton del mismo lado, si ves un corazon 
        Intenta ser lo mas rapido posible al presionar el boton correcto.
        Presiona en iniciar para hacer una prueba`,
        img: mixto
    }
];


const instructionStart = [
    {
        title: "Juguemos un poco más.",
        body: `Esta vez no diremos si es correcto o incorrecto. Presiona el botón de continuar para iniciar el ejercicio.`,
        img: example
    }
];

const positionsHearts = [ 
    ...[1,2,3,4].map((id)=>(
        {   
            position: "right",
            img: heart,
            class: "image-game--right",
            key: "L",
            type: "test",
            name: "heart",
            duration: 3000,
            id: `TH${id}`
        }
    )),
    ...[5,6,7,8].map((id)=>(
        {   
            position: "left",
            img: heart,
            class: "image-game--left",
            key: "A",
            type: "test",
            name: "heart",
            duration: 3000,
            id: `TH${id}`
        }
    ))
];

const positionsHearts2 = [ 
    ...[1,2,3,4,5,6,7,8,9,10].map((id)=>({
        position: "left",
        img: heart,
        class: "image-game--left",
        key: "A",
        type: "congruente",
        name: "heart",
        duration: 3000,
        id: `CH${id}`
    })),
    ...[11,12,13,14,15,16,17,18,19,20].map((id)=>({
        position: "right",
        img: heart,
        class: "image-game--right",
        key: "L",
        type: "congruente",
        duration: 3000,
        name: "heart",
        id: `CH${id}`
    }))
];

const positionsFlowers = [ 
    ...[1,2,3,4].map((id)=>(
        {   
            position: "right",
            img: flower,
            class: "image-game--right",
            key: "A",
            type: "test",
            name: "flower",
            duration: 2000,
            id: `TF${id}`
        }
    )),
    ...[5,6,7,8].map((id)=>(
        {   
            position: "left",
            img: flower,
            class: "image-game--left",
            key: "L",
            type: "test",
            name: "flower",
            duration: 2000,
            id: `TF${id}`
        }
    ))
];

const positionsFlowers2 = [ 
    ...[1,2,3,4,5,6,7,8,9,10].map((id)=>({
        position: "left",
        img: flower,
        class: "image-game--left",
        key: "L",
        type: "incongruente",
        name: "flower",
        duration: 2000,
        id: `IF${id}`
    })),
    ...[11,12,13,14,15,16,17,18,19,20].map((id)=>({
        position: "right",
        img: flower,
        class: "image-game--right",
        key: "A",
        type: "incongruente",
        name: "flower",
        duration: 2000,
        id: `IF${id}`
    }))
];

const positionsMixto = [
    ...[1,2].map((id)=>(
        {   
            position: "right",
            img: heart,
            class: "image-game--right",
            key: "L",
            type: "test",
            name: "mixto ",
            duration: 1750,
            id: `TM${id}`
        }
    )),
    ...[3,4].map((id)=>(
        {   
            position: "right",
            img: flower,
            class: "image-game--right",
            key: "A",
            type: "test",
            name: "mixto",
            duration: 1750,
            id: `TM${id}`
        }
    )),
    ...[5,6].map((id)=>(
        {   
            position: "left",
            img: heart,
            class: "image-game--left",
            key: "A",
            type: "test",
            name: "mixto",
            duration: 1750,
            id: `TM${id}`
        }
    )),
    ...[7,8].map((id)=>(
        {   
            position: "left",
            img: flower,
            class: "image-game--left",
            key: "L",
            type: "test",
            name: "mixto",
            duration: 1750,
            id: `TM${id}`
        }
    ))
];

const positionsMixto2 = [ 
    ...[1,2,3,4,5].map((id)=>(
        {   
            position: "right",
            img: heart,
            class: "image-game--right",
            key: "L",
            type: "mixto",
            name: "heart",
            duration: 1750,
            id: `M${id}`
        }
    )),
    ...[6,7,8,9,10].map((id)=>(
        {   
            position: "right",
            img: flower,
            class: "image-game--right",
            key: "A",
            type: "mixto",
            name: "flower",
            duration: 1750,
            id: `M${id}`
        }
    )),
    ...[11,12,13,14,15].map((id)=>(
        {   
            position: "left",
            img: heart,
            class: "image-game--left",
            key: "A",
            type: "mixto",
            name: "heart",
            duration: 1750,
            id: `M${id}`
        }
    )),
    ...[16,17,18,19,20].map((id)=>(
        {   
            position: "left",
            img: flower,
            class: "image-game--left",
            key: "L",
            type: "mixto",
            name: "flower",
            duration: 1750,
            id: `M${id}`
        }
    ))
];

export {
    instructionStart,
    instructionsHearts,
    positionsHearts,
    positionsHearts2,
    instructionsFlowers,
    positionsFlowers,
    positionsFlowers2,
    instructionsMixto,
    positionsMixto,
    positionsMixto2
};