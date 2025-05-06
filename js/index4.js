// Se programa el boton
let nombre;
document.querySelector(".boton").addEventListener("click", leer);
document.querySelector("#campo").addEventListener("keydown", teclado);

limpiar();  
function teclado(e){
    (e.key==="Enter") && leer();
}

function leer(){
    //value sirve para leer y escribir
    //SE ESTA UTILIZANDO PARA LEER
    // para comvertir a numero Number y a cadena String
    // trimp borra los espacion inútiles que hay adelante y atras. 
    // toupperCase(); convierte a mayuscula,
    // tolowerCase(), comvierte a minuscula
    // substring obtine el la pocicion del caracter que se desea utilzar
    //subString(0,2)
    nombre= document.querySelector("#campo").value.trim().toUpperCase(); 
    (nombre) && (document.querySelector(".caja").innerHTML=`hola ${nombre}`);
    //CODIGO PARA UTILIZAR EL ENTER
    limpiar();
}

function limpiar(){
    const ELEMENTO = document.querySelector("#campo");
    ELEMENTO.value=""; 
    // focus sirve para regresar el curson dentro del imput. 
    ELEMENTO.focus();
}
