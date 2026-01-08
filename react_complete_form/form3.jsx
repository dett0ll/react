export default function Form() {
  function onSubmit(FormData) {
    console.log(FormData.get("email"));
    console.log(FormData.get("password"));
    console.log(FormData.get("colors"));
    console.log(FormData.getAll("fruit"));
  }
  //in radio
  return (
    <>
      <section>
        <h2>Sign up form</h2>
        <form action={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="test@test.com"
          ></input>{" "}
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
          ></input>
          <textarea>Textarea</textarea>
          <fieldset>
            <legend>Fav color</legend>
            <label htmlFor="blue">Blue</label>
            <input id="blue" type="radio" name="colors" value="blue"></input>
            <label htmlFor="green">Green</label>
            <input id="green" type="radio" name="colors" value="green"></input>
            <label htmlFor="orange">Orange</label>
            <input
              id="orange"
              type="radio"
              name="colors"
              value="orange"
            ></input>
          </fieldset>
          <fieldset>
            <legend>Fav food</legend>
            <label htmlFor="apple">apple</label>
            <input
              id="apple"
              type="checkbox"
              name="fruit"
              value="apple"
            ></input>
            <label htmlFor="mango">mango</label>
            <input
              id="mango"
              type="checkbox"
              name="fruit"
              value="mango"
            ></input>
            <label htmlFor="orange">orange</label>
            <input
              id="orange"
              type="checkbox"
              name="fruit"
              value="orange"
            ></input>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
