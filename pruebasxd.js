var Rockny = {
    edad : 19,
    nombre : "Rockny",
    profesion : "Estudiante",
}

var Juan = {
    nombre : 'Juan',
    apellido: 'Gomez',
    edad :13
}

function cumpleaños(persona){
    return {
       ...persona,
       edad :  persona.edad + 1 
    }
}


cumpleaños(Rockny);


var x =  4, y =  '4';


const MAYORIA_DE_EDAD = 18;


const esMayorDeEdad = ({edad}) => edad <= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad.`);
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}


function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log("Denegado niño pendejo")
    }
}