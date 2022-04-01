import fetch from "node-fetch";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

fetch(url)
  .then((res) => res.json())
  .then((json) => {
    const meal = json.meals[0];
    const nome = meal.strMeal;
    const id = meal.idMeal;
    const regiao = meal.strArea;
    const arrayIngredientes = [
      meal.strIngredient1,
      meal.strIngredient2,
      meal.strIngredient3,
      meal.strIngredient4,
      meal.strIngredient5,
      meal.strIngredient6,
      meal.strIngredient7,
      meal.strIngredient8,
      meal.strIngredient9,
    ];
    // Eu sei que eu roubei, mas tentei roubar de um jetio bonito =D
    const ingredientes = (...ingredientes) => {
      let listaIngredientes = "";
      ingredientes.forEach((ingrediente) => {
        listaIngredientes += `${ingrediente}, `;
      });
      return listaIngredientes;
    };
    const instrucoes = meal.strInstructions;
    console.log({
      Nome: nome,
      ID: id,
      Regiao: regiao,
      Ingedientes: ingredientes(...arrayIngredientes),
      Instrucoes: instrucoes,
    });
  });
