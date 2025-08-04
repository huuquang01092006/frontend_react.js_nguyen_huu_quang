let checkParity = (number) => {
  if (number % 2 == 0) {
    console.log(`${number} is even`);
  } else if (number % 2 == 1) {
    console.log(`${number} is odd`);
  } else {
    console.log(`${number} not is number`);
  }
};
console.log(checkParity(10));
