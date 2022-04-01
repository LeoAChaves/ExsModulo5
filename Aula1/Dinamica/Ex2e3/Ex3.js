import fetch from "node-fetch";

const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

fetch(url)
  .then((res) => res.json())
  .then((json) => {
    const meal = json.meals;
    const listaRefeicao = criarListaDez(meal);
    console.log(listaRefeicao);
  });

function criarListaDez(meal) {
  const lista = [];
  for (let i = 0; i < 10; i++) {
    lista.push(meal[i].strMeal);
  }
  return lista;
}
