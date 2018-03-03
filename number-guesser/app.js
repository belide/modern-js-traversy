//Game Parameters
const min = 1;
const max = 10;
let counter = 3;

// Selectors
const form = document.querySelector('form');
const input = document.querySelector('input');
const message = document.querySelector('#error');
const minNum = document.querySelector('#min');
const maxNum = document.querySelector('#max');
let answer = Math.floor(Math.random() * (max + 1));

//Instruction Display
minNum.textContent = min;
maxNum.textContent = max;

//Error Display Color
const errorColor = () => {
  message.style.color = 'red';
  input.style.borderColor = 'red';
};

//Restart Button
const restart = () => btn.value = 'Try Again';

form.addEventListener('submit', (e) => {
  console.log(answer);
  const guess = parseInt(input.value);
  if (guess < min || guess > max || isNaN(guess)) {
    message.textContent = 'Please enter a valid number!';
    errorColor();
  } else {
    if (guess === answer) {
      message.textContent = `Congratulations, ${answer} is correct!`;
      message.style.color = 'green';
      input.style.borderColor = 'green';
      restart();
    } else {
      counter -= 1;
      if(counter === 0) {
        message.textContent = `Sorry, game over, the correct answer is ${answer}`;
        errorColor();
        btn.value = 'Try Again';
      } else {
        message.textContent = `${guess} is not correct, you have ${counter} chances left`;
        restart();
      };
    };
  };
  e.preventDefault();
});

form.addEventListener('mousedown', (e) => {
  if (e.target.value === 'Try Again'){
    window.location.reload();
  };
});
