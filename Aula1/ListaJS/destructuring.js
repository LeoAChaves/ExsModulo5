//Usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
console.log("\n\nEx 1: ----------------------------\n");

function handleMouseMove(event) {
  [clientX, clientY] = [event.clientX, event.clientY];
  console.log(clientX, clientY);
}

handleMouseMove({
  clientX: "left hand",
  clientY: "right hand ",
});

//Instancie apenas uma variável que receba first utilizando destructuring
console.log("\n\nEx 2: ----------------------------\n");

const obj = { first: "Jane", last: "Doe" };
const { first } = obj;

console.log(first);

// Instancie uma variavel que receba name e outra para colors
console.log("\n\nEx 3: ----------------------------\n");

const company = {
  name: "ACME Corp",
  address: "Nowhere st",
  products: {
    shirts: {
      colors: ["red", "green", "blue"],
    },
    socks: {
      colors: ["cyan", "magenta", "yellow"],
    },
  },
};

const {
  name: nome,
  products: {
    shirts: { colors: coresShirts },
    socks: { colors: coresSocks },
  },
} = company;

console.log({ nome: nome, coresShirts: coresShirts, coresSocks: coresSocks });
console.log("\n");
