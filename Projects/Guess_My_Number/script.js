'use strict';
//Allows you to be able to select the portion of code that would be touched by css.
console.log(document.querySelector('.message').textContent);
//Changing the actual elements in the code and it appears on the site.
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
//the use of .textContent is need even for numbers due to specifity reasons.
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//This will create a new value in the input box. Inputs are values and elements are text contents.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
//Eventlistener is something that waits for an event to happen and responds accordingly
document.querySelector('.check').addEventListener('click', function () {
  //The body of the function is what the event listern will do when acted upon with the event such as the click.
  //This is logging the input value into the counsel when the guess btn has been 'click'
  const guess = Number(document.querySelector('.guess'));
  console.log(guess);
  //!guess means that no input would be false because 0 = falsy. Negating makes it true and allows the if statement to run.
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Inputted';
  }
});
