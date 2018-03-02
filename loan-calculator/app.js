const btn = document.getElementById('loan-form');
const spinner = document.querySelector('.fa-spinner');
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const totalInterest = document.getElementById('total-interest');
const totalPayment = document.getElementById('total-payment');
const monthlyPayment = document.getElementById('monthly-payment');
const resultsDisplay = document.querySelectorAll('.results-display');

const calculate = () => {
  const principal = parseFloat(amount.value);
  const monthlyInterest = interest.value / 100 / 12
  const numOfPayments = years.value * 12
  const x = Math.pow((1 + monthlyInterest), numOfPayments);
  const calMonthly = principal * (monthlyInterest * x) / (x - 1)
  const calTotal = numOfPayments * calMonthly
  const calTotalInterest = numOfPayments * calMonthly - principal

  if (isFinite(calMonthly)) {
    totalInterest.innerText = `$${calTotalInterest.toFixed(2)}`;
    totalPayment.innerText = `$${calTotal.toFixed(2)}`;
    monthlyPayment.innerText = `$${calMonthly.toFixed(2)}`;
  } else {
    totalInterest.innerText = 'error!';
    totalPayment.innerText = 'error!';
    monthlyPayment.innerText = 'error!';
  }
}

const showSpinner = () => spinner.style.display = 'block';
const hideSpinner = () => spinner.style.display = 'none';

btn.addEventListener('submit', (e) => {
  totalInterest.innerText = 'Loading';
  spinner.style.display = 'block';
  setTimeout(() => spinner.style.display = 'none', 1000);
  setTimeout(calculate, 1000);
  for (let result of resultsDisplay) {
    setTimeout(() => result.style.visibility = 'hidden', 0);
    setTimeout(() => result.style.visibility = 'visible', 1000);
  };
  e.preventDefault();
});

//Declare UI Variables

//Parse Float
