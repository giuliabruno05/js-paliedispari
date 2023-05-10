// utente sceglie pari o dispari 
const userChoice = prompt("scegli pari o dispari");
console.log(userChoice);

const userNumbers = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(userNumbers);






// numero pc 
const computerNum = randomNum(1,5)
console.log(computerNum);


// dichiaro il risultato
let risultato = checkpariedispari;



// funzione per generare un numero random
function randomNum(nuovoMax,nuovoMin) {
    
    return Math.floor(Math.random() * (nuovoMax - nuovoMin + 1) + nuovoMin);
}
// CONDIZIONE PER VEDERE CHI HA VINTO 
if (userChoice === risultato ) {
    console.log("hai vinto");
}else 
    console.log("hai perso");

// funzione per checkare 

function checkpariedispari() {
    const sum =  userChoice + userNumbers ;
    if (sum % 2 === 0) {
        return  "pari"
    }else{
        return "dispari"
    }
}
