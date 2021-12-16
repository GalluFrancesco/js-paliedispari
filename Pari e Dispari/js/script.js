//funzione che genera un numero random fra max e min
//e lo restituisce
function numeroRandom(numMin, numMax){
    let risultato= Math.floor(Math.random() * ((numMax + 1) - numMin)) + numMin;
    return risultato;
}







