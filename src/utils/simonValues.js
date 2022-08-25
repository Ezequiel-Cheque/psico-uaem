import example from "../assets/images/example.png";
import heart1 from "../assets/images/heart_example1.png";
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
        title: "Te mostraremos unas flores !!",
        body: `Las flores pueden aparecera la izquierda o a la derecha`,
        img: flower1
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
        aprieta el boton del lado OPUESTO de donde veas la flor.
        Intenta ser lo mas rapido posible al presionar el boton correcto, presiona en iniciar para hacer una prueba`,
        img: flower
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

const instructionsMixto = [
    {
        title: "Vamos a juntar todo!",
        body: "Pon tus dedos sobre los botones 'A' y 'L' de tu teclado",
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
        aprieta el boton del lado OPUESTO de donde veas la flor.
        Intenta ser lo mas rapido posible al presionar el boton correcto, presiona en iniciar para hacer una prueba`,
        img: mixto
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
        id: `CH${id}`
    })),
    ...[11,12,13,14,15,16,17,18,19,20].map((id)=>({
        position: "right",
        img: heart,
        class: "image-game--right",
        key: "L",
        type: "congruente",
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
        id: `IF${id}`
    })),
    ...[11,12,13,14,15,16,17,18,19,20].map((id)=>({
        position: "right",
        img: flower,
        class: "image-game--right",
        key: "A",
        type: "incongruente",
        name: "flower",
        id: `IF${id}`
    }))
];

export {
    instructionsHearts,
    instructionsHearts2,
    positionsHearts,
    positionsHearts2,
    instructionsFlowers,
    instructionsFlowers2,
    positionsFlowers,
    positionsFlowers2
};