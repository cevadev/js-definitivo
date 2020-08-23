function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

//creamos un objeto aritmetica y los exportamos con las dos funciones
export const aritmetica = {
    sumar,
    restar
}