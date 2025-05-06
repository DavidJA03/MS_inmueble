var estado = true;
let apellido, dni, edad;
// Puedo crear variables globales sin definirlo, pero const no
// ESTE ES ARREGLI EN DONDE SE LLENAN DATOS
let nombre =["David","Noe"];
// tipo de valor tipo objeto. 
let Nombres={apellido:"jara", dni:12,edad:25};
// Esto es array de objetos. 
let usuarios=[{apellido:"dav", dni:25, edad:25}]
// cuando se hace un opracion no permitica con divicio. o po discompatvilidad de variables. 
saludar();
//Uso de typeof para saber el tipo de variable que se está utilizando
function saludar(){
   //SE IMPRIME EL VALOR ALAMACENADO 
    alert(nombre[0]);
    console.log(Nombres.apellido);
    console.log(typeof usuarios[0].apellido)
 }



 /// ejemplo 
 console.log(miNombre); // indefinido
 let color ="Rojo";
 if(true){
   var miNombre = "Jab";
   let color = "Azul";
 }
 console.log(miNombre); // jab
 console.log(color); //Rojo


