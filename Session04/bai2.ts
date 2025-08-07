let score: number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total: number = score.reduce((total, score) => total + score, 0);
let average: number = total / score.length;
console.log(average);