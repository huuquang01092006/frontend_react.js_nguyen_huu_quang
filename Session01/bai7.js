const sumArrays = (...args) => {
  return args.map((arr) => arr.reduce((total, num) => total + num, 0));
};

const result = sumArrays([1, 2], [6, 7, 8], [12, 8]);
console.log(result); 
