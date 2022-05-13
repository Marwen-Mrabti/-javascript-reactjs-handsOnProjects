'useStrict';

let count = Number(document.querySelector('#count').innerHTML);

const increment = (event) => {
  count++;
  document.querySelector('#count').innerHTML = count;
};
const decrement = (event) => {
  count--;
  document.querySelector('#count').innerHTML = count;
};
const reset = (event) => {
  count = 0;
  document.querySelector('#count').innerHTML = count;
};
