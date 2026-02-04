export default function Ingredient(props) {
  return (
    <>
      {" "}
      <div className="ing">
        <form action={props.dform}>
          <input name="ingName" placeholder="enter recipe name"></input>
          <button>Add Ingredient</button>
        </form>
        <li>{props.eachelement}</li>
      </div>
      <article className={props.ing.length > 3 ? "old" : "foot"}>
        <div>
          <h3>Ready for recipe?</h3>
          <p>Generate recipe from your list of ingredients</p>
        </div>

        <button onClick={props.getaiRecipe}>Get a recipe</button>
      </article>
    </>
  );
}
