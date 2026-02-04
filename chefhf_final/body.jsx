import React from "react";
import Recipe from "./recipe.jsx";
import Ingredient from "./ingredientsmain.jsx";
import { getRecipe } from "./ai.js";
export default function Body() {
  //creating ingredeints array
  //let [disp, setdisp] = React.useState(false);
  let [recipe, setRecipe] = React.useState(false);
  console.log(`first ${recipe}`);
  let [ingredients, setingredients] = React.useState([]);
  function ingForm(formData) {
    let ingName = formData.get("ingName");
    setingredients((ingredients) => [...ingredients, ingName]);
  }
  //display each ingredient item as a list ingElem
  let ingElem = ingredients.map((elem) => (
    <ul>
      <li>{elem}</li>
    </ul>
  ));

  async function getaiRecipe() {
        const recipeMarkdown = await getRecipe(ingredients)
        setRecipe(recipeMarkdown)
    }

  
  console.log(`second ${recipe}`)
  return (
    <>
      <Ingredient
        eachelement={ingElem}
        dform={ingForm}
        ing={ingredients}
        getaiRecipe={getaiRecipe}
      />

      <Recipe recipe={recipe} />
    </>
  );
}
