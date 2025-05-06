//function saludar(nombre){
  //  return `hola ${nombre}`;
//}

//console.log(saludar("david"));

// forma de la fucnion  flecha es nonima
// FUNCIO_FLECHA () => {}

//    let SALUDOS = (nombre) => {`saludos` +nombre};
  //  let suma = (a,b) => a+b;


    // metodo tradicional

    /*const saludar = function(){
        console.log("hola");
    } */
    //funcion flecha
    const saludar = () =>{
        console.log("hola");
    } 
    // cuando solo tien una sola linea de instrucion se puede quitar las llaves. 
    const saludar2 = () => console.log("hola");

    // cuando tiene parametro

    const saludar3= ()=> console.log("Hola");

    const sumas = (a,b) => console.log(`El total es ${a} ${b}`);
    const sumas2 = (a,b) =>  a+b;
    // ahpra funcion de varias lineas

    const funcioncariaslineas = () => {
        console.log("1");
        console.log("2");
        console.log("3");
    }
    const numero = [1,2,3,4,5];
    
    saludar();
    sumas(4,5);

