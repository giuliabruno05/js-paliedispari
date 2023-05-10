

//chiedere all'utente di inserire una parola 
let word = prompt("Inserisci una parola");

let search = ispalindroma (word);

 

// FUNZIONE
function ispalindroma (word) {

    //creo un array contenente delle lettere
    const letters = word.split("");
    console.log(letters);

    //inverto il contenuto dell'array 
    const lettersReverse = letters.reverse();
    console.log(lettersReverse);

    //riunisco il coontenuto
     const lettersReverseWord = letters.join('');
    console.log(lettersReverseWord);

    //verifico se la parola è palindroma o meno 
    if (word == lettersReverseWord) {
        console.log(`la parola è palindroma`);
    }else {
        console.log(`la parola non è palindroma`);
    }
}



















