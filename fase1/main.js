/**
 * I primi dodici numeri della sequenza di Fibonacci sono:
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
 * Il 12° numero è il primo della sequenza a essere di 3 cifre. 
 * Quale è il primo numero della sequenza ad avere 1000 cifre?
 * 
 * Inizializzo a e b con i primi due valori della sequenza di fibonacci
 * in pos conservo il valore della posizione del numero di fibonacci conservato in b
 * b verrà usato per conservare il numero successivo nella sequenza mente a diventerà b
 * ovvero il numero precedente al nuovo successivo numero della sequenza calcolato.
 * 
 * a e b sono oggeti di tipo BigInt perchè risultava impossibile utilizzare il tipo di dato primitivo 
 * Number di JavaScript, Number di JavaScript non riesce a rappresetare numeri così grandi
 * 
 */
var a = BigInt(1);
var b = BigInt(1);
var pos = 2; 

function fibo(n) {
    /**
     * eseguo il calcolo del numero di fibonacci in un while che ha come condizione di stop finchè la lunghezza 
     * delle cifre non ha ragiunto il valore n continua il calcolo del prossimo numero di fibonacci
     * 
     * per egeuire il controllo sulla lunghezza converto il numero in stringa
     * e controllo se la lunghezza della stringa non ha ragiunto il valore n
     */
    while((b + '').length < n) { 
        let temp = a+b; // calcolo il prossimo numero di fibonacci
        a = b; // a diventa b, ovvero il numero di fibonacci precedente nella sequenza
        b = temp; // b diventa il numero di fibonacci appena calcolato
        pos++; // aggiorno il valore della posizione
    }
    // stampo la posizione nella sequenza ed il valore del numero di fibonacci 
    console.log('Posizione: ' + pos, '\nFibonacci(' + pos + '): ' + b);
}

// passo 1000 come valore, quindi calcolo fino al primo numero di fibonacci ad avere 1000 cifre
fibo(1000); 