"use strict";
//Selecting the elements from the DOM and assinging it to a value in order to make changing
//it easier.
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
//Setting the score for each player to 0 using the DOM
score0El.textContent = 0;
score1El.textContent = 0;
//Hiding the dice from the player until they roll the dice.
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
let playing = true;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player-winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //toggle takes the class that was being used and then
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//Rolling dice function
btnRoll.addEventListener("click", function () {
  if (playing) {
    //generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //Check dice for a one and if so then switch to the next player.
    if (dice != 1) {
      //add dice to current score - code into global storage
      //+= means you add in the current variable and then add in the = sign
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switching to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //active player score
    scores[activePlayer] += currentScore;
    //
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if score is 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
