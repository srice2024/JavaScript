'use strict';
/*
/Allows you to be able to select the portion of code that would be touched by css.
console.log(document.querySelector('.message').textContent);
Changing the actual elements in the code and it appears on the site.
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
the use of .textContent is need even for numbers due to specifity reasons.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
This will create a new value in the input box. Inputs are values and elements are text contents.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
Eventlistener is something that waits for an event to happen and responds accordingly
*/
//State data, data that sets the standard for the application.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //The body of the function is what the event listern will do when acted upon with the event such as the click.
  //This is logging the input value into the counsel when the guess btn has been 'click'
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //The reset functionality is implemented and will reset the game without refreshing the browser.
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    //Refractoring example of creating a function to replace commmonly repeating code that we have used over and over again.
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  //Game logic that creates the macanics needed in order to have the score change with the actions of the player.
  //!guess means that no input would be false because 0 = falsy. Negating makes it true and allows the if statement to run.
  if (!guess) {
    displayMessage('No Number Inputted');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    //Changing the background color of the winning screen. Use the style notation and also use camelcase when naming in JS.
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Doubling the width of the numbers when the player wins.
    document.querySelector('.number').style.width = '30rem';
    //Creating and implementing the high score functionality for the game.
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    //The creation of the dynamic score that changes with the incorrect guesses in the game.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*} else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }*/
