// Utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array.

console.log("\nEx 1: ----------------------------\n");

const numbersEx1 = [4, 9, 16, 25];
const sqrt = numbersEx1.map(Math.sqrt);

console.log(sqrt);

// Utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.

console.log("\nEx 2: ----------------------------\n");

var numbersEx2 = [65, 44, 12, 4];

const multiDez = (numbers) => {
  let vezesDez = [];
  numbers.forEach((number) => {
    vezesDez.push(parseInt(number) * 10);
  });
  return vezesDez;
};

console.log(multiDez(numbersEx2));

// Retorne um array com valores de age(idade) maiores ou iguais a 18 com arrow function e filter.

console.log("\nEx 3: ----------------------------\n");

const ages = [32, 33, 16, 40];

const maiorDeIdade = (idade) => {
  return idade >= 18;
};

const filtrado = ages.filter(maiorDeIdade);

console.log(filtrado);
