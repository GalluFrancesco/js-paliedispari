//funzione che genera un numero random fra max e min
//e lo restituisce
function numeroRandom(numMin, numMax){
    let risultato= Math.floor(Math.random() * ((numMax + 1) - numMin)) + numMin;
    return risultato;
}

//funzione che verifica se il num è pari o dispari
//ritorna true se pari altrimenti dispari
function pariDispari(num1, num2){ 
    return (num1+num2)%2===0;
}

const pariButton=document.querySelector(".pari");
const dispariButton=document.querySelector(".dispari");
const stamp=document.querySelector(".stamp")
const MIN=1;
const MAX=5

pariButton.style.borderColor="grey";
dispariButton.style.borderColor="grey";

pariButton.addEventListener('click', function () {
    const numPlayer=parseInt(prompt("Scegli un numero fra 1 e 5"));

    //il pc genera random un numero conpreso fra 1 e 5
    const numPc=numeroRandom(MIN, MAX)

    dispariButton.style.borderColor="grey";
    pariButton.style.borderColor="red";

    //verifico che sia pari o dispari
    if(pariDispari(numPlayer, numPc)){
        stamp.innerHTML=`HAI VINTO. Il computer ha scelto il numero ${numPc} il giocatore
                         ha scelto il numero ${numPlayer} il risultato è pari.`;
    }else{
        stamp.innerHTML=`HAI PERSO. Il computer ha scelto il numero ${numPc} il giocatore
                         ha scelto il numero ${numPlayer} il risultato è dispari.`;
    }
})

dispariButton.addEventListener('click', function () {
    const numPlayer=parseInt(prompt("Scegli un numero fra 1 e 5"));
    
    pariButton.style.borderColor="grey";
    dispariButton.style.borderColor="red";
    //il pc genera random un numero conpreso fra 1 e 5
    const numPc=numeroRandom(MIN, MAX)

    //verifico che sia pari o dispari
    if(pariDispari(numPlayer, numPc)){
        stamp.innerHTML=`HAI PERSO. Il computer ha scelto il ${numPc} il giocatore
                         ha scelto il numero ${numPlayer} il risultato è pari.`;
    }else{
        
        stamp.innerHTML=`HAI VINTO. Il computer ha scelto il numero ${numPc} il giocatore
                         ha scelto il numero ${numPlayer} il risultato è dispari.`;
    }
})






