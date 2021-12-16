//creo un funzione che riceve un parola
//restituisce true se questa è palindroma
//restituisce false se non lo è
function palindroma(inputWord){
    let reverseWord="";

    //faccio un ciclo inverso che parte dall'ultima
    //lettera della parola in input e la concatena
    //alla variabile reverseWord
    for(let i=inputWord.length-1; i>=0; i--){
        reverseWord+=inputWord[i];
    }

    if(inputWord === reverseWord){
        return true;
    }

    return false;
}
//chiedo all'utente la parola da verificare
let inputWord = prompt("inserisci una parola");
let stamp=document.querySelector(".stamp");

//se la funzione restituisce true stampo "è palindroma"
//altrimenti stampo "non è palindroma"
if(palindroma(inputWord)){
    stamp.innerHTML=`La parola ${inputWord} è palindroma`
}else{
    stamp.innerHTML=`La parola ${inputWord} non è palindroma`
}




