const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function somarValores(...valores) {
  let soma = 0;
  valores.forEach((valor) => {
    soma += valor;
  });
  return soma;
}

console.log(somarValores(...array));
