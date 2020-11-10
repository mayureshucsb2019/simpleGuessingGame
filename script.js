'use strict';

// Selecting the  elements b
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const player0Element = document.getElementById("name--0");
const player1Element = document.getElementById("name--1");

const diceElement = document.querySelector(".dice");
const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

const background0 = document.querySelector(".player--0");
const background1 = document.querySelector(".player--1");

let flag = true // means player one is active

// Setting intial value to start position and image to hidden
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

buttonRoll.addEventListener("click", function(){
    const dice = Math.trunc(Math.random()*6) + 1;
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${dice}.png`;

    if(dice != 1){
        if(flag){
            current0Element.textContent = Number(current0Element.textContent) + dice;
        }
        else{
            current1Element.textContent = Number(current1Element.textContent) + dice;
        }
    }
    else{
        flag = !flag;
        if(flag){
            score1Element.textContent = Number(score1Element.textContent) + Number(current1Element.textContent);
            if(Number(score1Element.textContent)>=100){
                player1Element.textContent = "Winner!!!";
                buttonRoll.classList.add("hidden");
                buttonHold.classList.add("hidden");

            }
            background1.classList.remove("player--active");
            background0.classList.add("player--active");
            current0Element.textContent = 0;
        }
        else{
            score0Element.textContent = Number(score0Element.textContent) + Number(current0Element.textContent);
            if(Number(score0Element.textContent)>=100){
                player0Element.textContent = "Winner!!!";
                buttonRoll.classList.add("hidden");
                buttonHold.classList.add("hidden");

            }
            background0.classList.remove("player--active");
            background1.classList.add("player--active");
            current1Element.textContent = 0;
        }
    }
});

buttonNew.addEventListener("click", function(){
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    diceElement.classList.add("hidden");
    player0Element.textContent = "Player 1";
    player1Element.textContent = "Player 2";
    buttonRoll.classList.remove("hidden");
    buttonHold.classList.remove("hidden");
});

buttonHold.addEventListener("click", function(){
    if(flag){
        score0Element.textContent = Number(score0Element.textContent) + Number(current0Element.textContent);
        current0Element.textContent = 0;
        if(Number(score0Element.textContent) >= 100){
            player0Element.textContent = "WINNER!!!"
            buttonRoll.classList.add("hidden");
            buttonHold.classList.add("hidden");
        }
    }
    else{
        score1Element.textContent = Number(score1Element.textContent) + Number(current1Element.textContent);
        current1Element.textContent = 0;
        if(Number(score1Element.textContent) >= 100){
            player1Element.textContent ="WINNER!!!"
            buttonRoll.classList.add("hidden");
            buttonHold.classList.add("hidden");
        }
    }
});