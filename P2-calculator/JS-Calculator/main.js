'useStrict';

//display function
const display = (value) => {
  document.getElementById('textarea').value += value;
};

// calculate function
const calculate = () => {
  let value = document.getElementById('textarea').value;
  let answer = eval(value);
  document.getElementById('textarea').value = answer;
};

//clr function
const clr = () => {
  document.getElementById('textarea').value = '';
};
