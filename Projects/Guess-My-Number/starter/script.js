'use strict';

// This snippet allows us to create a random number that is within the boundries of 1-20. Note: Math.trunc removes the extra decimal numbers
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// This will display the default score value
let score = 20;

// This snippet allows us to create an event listener when the button is clicked it will run a certain function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // Here is the logic that will compare our randomly generated secret number to the users guess

  // This will output if no number is entered in the input field
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }

  // This will output if the number the user correctly guesses the secret number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }

  // This will output if the number is too high also if there are too many wrong guess and the score reaches 0
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // This will output if the number is too low also if there are too many wrong guess and the score reaches 0
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
