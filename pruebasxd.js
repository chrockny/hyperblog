var Rockny = {
    edad : 15,
    nombre : "Rockny",
    profesion : "Estudiante",
}

function cumpleaños(persona){
    return {
       ...persona,
       edad :  persona.edad + 1 
    }
}


cumpleaños(Rockny);


var x =  4, y =  '4';

