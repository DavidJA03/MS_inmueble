const Minombre= "dav";
const IGV=0.21;

let cantidada = 2;
let precio = 4;

function saluddar(){
    
    document.querySelector(".caja").innerHTML=`Hola ${Minombre}`;
}

function CalcularIVA(){
    escribir(cantidada*precio*IGV);
}

function escribir(valor="Sin valor de IGV"){
    document.querySelector(".caja").innerHTML+= `<div>${valor}</div>`;
}


//  AHORA TRABAJAMOS CON EVENTOS
// 1. A quien va dirigido.
// 2. Que evento se va realizar. 
// 3. la funcion que se va a ejecutar. 
// paso 1.
document.querySelector(".boton1").onclick = saluddar;
// diferencia da en todos los navegadores, y permite diferentes eventos
document.querySelector(".boton2").addEventListener("click", CalcularIVA);
escribir();