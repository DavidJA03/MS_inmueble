let numero1 =10;
let numero2 =2;
let numero3 =3;
let caja = document.querySelector(".contenedor");
numero1+=10;

numero1-=2;

let resultado = numero1/numero2;

dibujar(resultado);
dibujar(15);
function dibujar(valor){
    caja.innerHTML+=`<div>${valor}</div>`;
}
 

//Signos de comparacion. 
// == compara igualaciones. 
// != verifica si son diferentes. 
// !== compara el sipo de lavor y el valor en si, osea si es falso retorna 
//true afirmando que es falso la exprexion. 
// === compara el valor y ademas el tipo de valor que se estáingresando. 
/*por ejemplo 
numero1 = true;
nunero2 =1;
ahora comparamos con el (===) y (==)

numero1 == numero2;   es true
numero1 === numero2; es false compara el valor y setTimeout, uno es boleano y el otro numerico;*/