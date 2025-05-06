

let nombres;


document.querySelector("#boton").addEventListener("click", guardar);
document.querySelector("#nombre").addEventListener("keydown", enter);


function guardar(){
    nombres  = document.querySelector("#nombre").value.trim;
    document.querySelector("#dato").innerHTML+= `<option>${nombres}</option>`;
    limpiar();
}
function limpiar(){
    const nombre = document.querySelector("#nombre");    
    nombre.value="";
    nombre.focus();
}

function enter(e){
    (e.key === "Enter") && guardar();
}