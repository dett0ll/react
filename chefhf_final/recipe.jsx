export default function Recipe(props) {
  console.log(props.recipe);
  return (
    <>
      <article className={props.recipe ? "recipe" : "foot"}>
        <p>
          {props.recipe}
        </p>
      </article>
    </>
  );
}
