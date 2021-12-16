//funzione che genera un numero random fra max e min
//e lo restituisce
function numeroRandom(numMin, numMax){
    let risultato= Math.floor(Math.random() * ((numMax + 1) - numMin)) + numMin;
    return risultato;
}

//funzione che verifica se il num è pari o dispari
//ritorna true se pari altrimenti dispari
function pariDispari(numComputer, numPlayer){
    if((numComputer+numPlayer)%2 === 0){
        return true;
    }  
    return false;
}

const pariButton=document.querySelector(".pari");
const dispariButton=document.querySelector(".dispari");


pariButton.addEventListener('click', function () {
    const numPlayer=prompt("Scegli un numero fra 0 e 5");

})

dispariButton.addEventListener('click', function () {
    const numPlayer=prompt("Scegli un numero fra 0 e 5");

})






