// Uso de comillas invertidas en java 
//INTERPOLACION 
// Para almacenar un texto
let nombre1 = "jab";
let nombre2 = 'jab';
let nombre3 = `jab`;
let edad = 22;
// para obtener el año actual de la computadora
let actual  = new Date().getFullYear();
let resultado = "Mi nombre es " + nombre1 + " y mi edad es "+edad ;
let resultado2 = 'Mi nombre es ' + nombre2;
let resultado3 = `Mi nombre es ${nombre1} y mi edad es ${edad} años.
Mi ano de nacimiento es ${calcularnacimiento(edad)}`; 

//el codigo para el index.html
//Acedemos al Body
// innerHTML borra lo que hayga
document.querySelector("body").innerHTML = `
<div> Mi nombre es <span>
${nombre1}</span>
</div>
<div> Mi nedad es <span>
${edad}</span>
</div>
<div>El año en nacimiento es 
<span>${calcularnacimiento(edad)}</span></div>`;
console.log(resultado);
console.log(resultado3);
function calcularnacimiento(miedad){
    return actual-miedad;
}