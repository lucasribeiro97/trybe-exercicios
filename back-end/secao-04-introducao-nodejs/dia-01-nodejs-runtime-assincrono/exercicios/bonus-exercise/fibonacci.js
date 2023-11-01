const readline = require('readline-sync');

function handleFibonacci(quantity) {
  let first = 0;
  let second = 1;
  let next = 0;

  console.log('Fibonacci:');

  for (let i = 0; i < quantity; i++) {
    if (i <= 1) {
      next = i;
    } else {
      next = first + second;
      first = second;
      second = next;
    }

    console.log(next);
  }
}

function main() {
  const n = readline.questionInt('Enter \'n\' value: ');

  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }

  console.log(`n: ${n}`);

  handleFibonacci(n);
}

main();