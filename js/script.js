/*-----------------------------------TRACCIA----------------------------------------------

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

----------------------------------------------------------------------------------------*/

/*----------------------------------VERSIONE 2--------------------------------------------

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

#SUPER BONUS
Se avete finito tutti i bonus potete scrivere all'insegnante o ai tutor per ricevere delle sfide extra!

----------------------------------------------------------------------------------------*/

//# FUNCTIONS
//function for cell creation
const createCell = (content) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'd-flex', 'justify-center', 'align-center');
    cell.append(content);
    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
        console.log(content);
    })
    return cell;
}


//1. Pick elements from DOM
const inputDifficulty = document.getElementById('difficulty');
console.log(inputDifficulty);
const buttonPlay = document.getElementById('play');
console.log(buttonPlay);
const targetGrid = document.querySelector('.grid');
console.log(targetGrid);
const targetTitle = document.querySelector('main h1');
console.log(targetTitle);
const properties = document.querySelector(':root');
console.log(properties);



//2. Add listener to button

buttonPlay.addEventListener('click', () =>{
    console.log('press');

    //3. Reset Grid
    targetGrid.innerText = '';

    //4. Add d-none to title
    targetTitle.classList.add('d-none');

    //5. Add d-flex to grid

    if (targetGrid.classList.contains('d-none')){
        targetGrid.classList.remove('d-none');
        targetGrid.classList.add('d-flex');
    }

    //6. Define number of cells to create, based on difficulty
    const RequiredCellsForRow = parseInt(inputDifficulty.value);
    console.log(RequiredCellsForRow);
    const cellNumber =  RequiredCellsForRow * RequiredCellsForRow; 
    console.log(cellNumber);

    //7. Change cells for row variable in css depending on difficulty
    properties.style.setProperty('--cell-for-row', RequiredCellsForRow);
    
    //8. Add cells into grid
     for (let i = 1; i <= cellNumber; i++){

        const cell = createCell(i);
        targetGrid.appendChild(cell);

    }
    
});
