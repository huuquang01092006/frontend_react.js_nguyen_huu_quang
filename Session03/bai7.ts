function removeChar(input: string): string {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}

console.log(removeChar("banana"));
console.log(removeChar("hello world"));
