let numeroM = Math.floor(Math.random()*(10-1)+1);
console.log(numeroM)

let numeroU = parseInt(prompt("Intenta adivinar el numero del 1 al 10"));

let vidas = 3;
    while ( numeroM !== numeroU && vidas > 1){
        vidas--;
        numeroU = parseInt ( prompt("Vuelve a intentarlo, tus vidas son: " + vidas))
    }

    if (numeroM === numeroU){
        console.log("Felicidades, ganaste !!!")
    }else {
        console.log("Perdiste :(, el numero era: " + numeroM)
    }