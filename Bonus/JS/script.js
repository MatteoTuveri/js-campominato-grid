/* *Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella 
cliccata.

 */

const start = document.querySelector('.btn');
const playground = document.getElementById('playground');
const difficulty = document.querySelector('.form-select');

start.addEventListener('click',()=>{
    playground.classList.remove('text-white');
    playground.innerHTML='';
    let squareNumber;
    if(difficulty.value === 'easy'){
        squareNumber=100;
        playground.style.width='1000px'
    }
    else if(difficulty.value === 'normal'){
        squareNumber=81;
        playground.style.width='900px'

    }
    else if(difficulty.value === 'hard'){
        squareNumber=49;
        playground.style.width='700px'
    }
    else{
        squareNumber=0;
        playground.innerHTML = `Scegliere la difficoltà`
        playground.classList.add('text-white');
    }
    
    for(let i=1;i<=squareNumber;i++)//squares generator
    {
        responsiveSquare(playground,'active',i);
    }

    start.innerHTML=`Retry`

})