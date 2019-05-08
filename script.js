//selectors
const header = document.querySelector('.header');
const drawSub = document.querySelector('.subtitle');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const diceOneCon = document.querySelector('.dice1-container');
const diceTwoCon = document.querySelector('.dice2-container');
const dificulty = document.querySelector('#dificulty');
const subBtn = document.querySelector('.start');
const marbles = document.querySelectorAll('.marbles');

//var
let dificultyVal = 6;

//updating the dificulty level
dificulty.addEventListener('change', function(e){
    dificultyVal = e.target.value
})

subBtn.addEventListener('click', function(){

    //animations & styles
    document.querySelector('body').style.fontSize = "3vw";

    //removing styles
    drawSub.removeAttribute('style')
    
    //random number genearators        
    let diceOneNum = Math.floor((Math.random() * dificultyVal)+1);
    let diceTwoNum = Math.floor((Math.random() * dificultyVal)+1);

    

    //deleting marbles
    diceOneCon.innerHTML = "";
    diceTwoCon.innerHTML = "";

    //marble creators
    for(let i = 0; i < diceOneNum; i++) {
        let div = document.createElement('div');
        div.classList.add('marbles');
        diceOneCon.appendChild(div);
    }

    for(let i = 0; i < diceTwoNum; i++) {
        let div = document.createElement('div');
        div.classList.add('marbles'); 
        diceTwoCon.appendChild(div);
    }

    //results displayed according to this conditions
    if(diceOneNum === diceTwoNum) {

        header.textContent= "Draw!";
        drawSub.setAttribute('style', 'display: block; margin-top: -25px; margin-bottom: 25px;')
        player2.style.color= "#ff4057"
        player1.style.color= "#ff4057"

    } else if(diceOneNum > diceTwoNum) {

        header.textContent= "Player 1 Wins!"
        player2.style.color= "#ff4057"
        player1.style.color= "#05a19c"

    } else if(diceOneNum < diceTwoNum) {
        
        header.textContent= "Player 2 Wins!"
        player1.style.color= "#ff4057"
        player2.style.color= "#05a19c"

    } 
})







